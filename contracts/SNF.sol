pragma solidity ^0.8.0;

import "./Token.sol"; 
import "./SNFInterface.sol"; 

contract SNF is SNFInterface {
mapping (address => uint256) public dao_totalSupply; // mapping of each dao and its total supply of token
mapping (address => bool) public token_holders_validation; 

address public admin; // the admin of this smart contract

Proposal public proposal; 

Token token_a;
Token token_b; 

address public new_dao; 

constructor(address _admin, address source_dao, address target_dao, address source_token_holder, string memory _description){
    admin = _admin; 
    proposal.status = Status.SUBMITTED;

    proposal.description = _description; 
    proposal.daos[0] = source_dao; 
    proposal.daos[1] = target_dao; 

    proposal.token_holders[0] = source_token_holder; 

    token_a = Token(proposal.daos[0]); 
    token_b = Token(proposal.daos[1]); 
   
    dao_totalSupply[proposal.daos[0]] = token_a.totalSupply(); 

    dao_totalSupply[proposal.daos[1]] = token_b.totalSupply(); 

    token_holders_validation[source_token_holder] = false; 
}
/* gives permission to only the token holder to perform a certain operation*/
modifier adminOnly {
    require(tx.origin == admin, "only the admin can call this method"); 
    _; 
}

/* gives permission to only the token holder to perform a certain operation*/
modifier tokenHolderOnly {
    require(msg.sender == proposal.token_holders[0] || msg.sender == proposal.token_holders[1], "only token holders can call this method"); 
    _; 
}

/* checks if the deal is in an ongoing stage*/
modifier ifDealOngoing {
    require(proposal.status != Status.REJECTED || proposal.status != Status.COMPLETED || proposal.status != Status.SUBMITTED, "no deal was struck between the two parties"); 
    _; 
}
/* sets the person/entity that wants to bargain on your proposal, you need to set it before starting any bargaining on smartsettle*/
function set_target_token_holder() public override {
        require(msg.sender != admin); 

        proposal.token_holders[1] = msg.sender; 
        token_holders_validation[msg.sender] = false; 
}

/* returns the status of the proposal*/
function get_proposal_status() public view returns (uint256) {
    return uint256(proposal.status); 
}

function get_new_dao_address() public view returns (address) {
    return new_dao; 
}
/* this functions verifies that at least 50% of the tokens of each DAO are locked/pledged during the funding period
*/
function if_enough_funds() public view returns (bool) { 
    
    if((token_a.allowance(proposal.token_holders[0],admin) >= (dao_totalSupply[proposal.daos[0]] / 2)) && (token_b.allowance(proposal.token_holders[1],admin) >= (dao_totalSupply[proposal.daos[1]] / 2))) {
        return true; 
    } else {
        return false; 
    }
} 
/* validate_execution() can only be called by the token holders, 
    it allows the holders to validate the execution of the deal. If both parties validate the deal the rest of the funding and/or vesting period are skipped
*/
function validate_execution() ifDealOngoing public tokenHolderOnly { 
    require(if_enough_funds(), "not enough funds were locked"); // the deal must be funded
    token_holders_validation[msg.sender] = true; 
    if(token_holders_validation[proposal.token_holders[0]] && token_holders_validation[proposal.token_holders[0]]) {
        
        proposal.status = Status.VALIDATED; // validated

        // emit valid event
        emit Valid(proposal.status); 
    }
}
/** 
    this function has to be triggered by the frontend when the funding period timer is up. Only the admin can call this function.
*/
function end_funding_period() adminOnly ifDealOngoing public {
    require(if_enough_funds() || block.timestamp > proposal.funding_end, "the funds are not sufficient yet, the parties still have time to finance the deal");
    
    if(if_enough_funds()) { 
        proposal.vesting_start = block.timestamp; 
        proposal.vesting_end = proposal.vesting_start + proposal.vesting_period*60*60; 
        proposal.status = Status.VESTING; 
    } else {
        proposal.status = Status.REJECTED; 
    }
}
/** 
    this function has to be triggered by the frontend when the vesting period timer is up. Only the admin can call this function.
*/
function end_vesting_period() adminOnly ifDealOngoing public {
    require(block.timestamp > proposal.vesting_end, "the vesting period is still not done"); 
    require(if_enough_funds()); 
    
    proposal.status = Status.PENDING_VALIDATION; 
}

/**
At any moment before the vesting period is done one of the two parties can come back on their decision and reject the deal
 */
function stop_deal() tokenHolderOnly public {
    require(block.timestamp < proposal.vesting_end, "the vesting period has ended the deal cannot be stopped"); 
    // set allowance back to 0
    token_a.approve(admin, 0); 
    token_b.approve(admin, 0); 

    proposal.status = Status.REJECTED; 
}

/* 
fills_blanks() takes in all the parameters that were defined as the blanks in the SNF and saves them in the smart contract
*/
function fill_blanks(uint256 _token_proportion,uint256 _funding_period, uint256 _vesting_period,uint256 _cliff_period, uint256 _tokens_to_emit, bool _deal) public override adminOnly returns (bool _success) { // fills the blank of the SNF is agreement is struck
    require(proposal.token_holders[1] != address(0)); 
   
    if(_deal == false){ 
        proposal.status = Status.REJECTED; 
        return false; 
    }
    require(_token_proportion > 0 && _token_proportion < 100); 

    proposal.token_proportion = _token_proportion; 
    proposal.cliff_period = _cliff_period;
    proposal.vesting_period = _vesting_period; 
    proposal.funding_period = _funding_period; 

    proposal.tokens_to_emit = _tokens_to_emit; 

    proposal.funding_start = block.timestamp; 
    proposal.funding_end = proposal.funding_start + proposal.funding_period*60*60; // in days

    proposal.status = Status.FUNDING; 

    return true; 
}

/*
fund() takes no parameters. It can only be called by a token_holder, it also needs a deal to be ongoing and can only be called during the funding period

Essentially what it does is it gives permission to the admin to withdraw the user's token balance if the deal is completed
 
*/

function fund() public override tokenHolderOnly returns (bool _success) {
       
    require(proposal.status == Status.FUNDING);
    
     if(msg.sender == proposal.token_holders[0]) { 
       token_a.approve(admin, token_a.balanceOf(proposal.token_holders[0])); 
    } else {
       token_b.approve(admin, token_b.balanceOf(proposal.token_holders[1])); 
    }
    return true; 
} 

/*
execute() takes in no parameters. It first checks if enough funds where locked from both parties. If it is the case,
takes in the existing tokens from both parties and creates the token of the new DAO and distributes shares to the two parties according to the agreed proportions
NB: this execution only takes into account the case of a merger, the flow for an acquisition would be different. 
Moreover, 
in the MVP we consider that the liquidity of both DAOs merging are just their tokens and there is no transfer of effective liquidity
*/
function execute() public ifDealOngoing adminOnly override returns (bool) {

    require(if_enough_funds()); 

    require(proposal.status == Status.VALIDATED); 

    Token newDAO = new Token(proposal.tokens_to_emit); // we will need that address for the demo TODO: add event to return the address

    // lock the tokens

    token_a.transferFrom(proposal.token_holders[0],admin,token_a.balanceOf(proposal.token_holders[0])); 

    token_b.transferFrom(proposal.token_holders[1],admin,token_b.balanceOf(proposal.token_holders[1])); 

    // release the new tokens
    newDAO.transfer(proposal.token_holders[0],(proposal.tokens_to_emit*proposal.token_proportion)/100); 
    
    newDAO.transfer(proposal.token_holders[1],(proposal.tokens_to_emit*(100-proposal.token_proportion))/100); 

    proposal.status = Status.COMPLETED; // change proposal status to complete  

    new_dao = address(newDAO); 

    return true; 
    } 
}