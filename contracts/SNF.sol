pragma solidity ^0.8.0;

import "./Token.sol"; 
import "./SNFInterface.sol"; 

contract SNF is SNFInterface{

address[2] public daos = [0xd7Ca4e99F7C171B9ea2De80d3363c47009afaC5F,0x0813d4a158d06784FDB48323344896B2B1aa0F85]; // hardcoded from account addresses from remix, to replace with the address at which the two token contracts will be deployed
address[2] public token_holders = [0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db]; // hardcoded addresses from remix, to replace with two metamask wallets later 
mapping (address => uint256) public dao_valuations; // mapping of each dao and its valuation
mapping (address => uint256) public dao_totalSupply; // mapping of each dao and its total supply of token

uint256 public new_totalSupply; // the total supply of tokens to be issued for the new venture
  
uint256 public funding_period; 
uint256 public vesting_period; 
uint256 public cliff_period; 

uint public funding_start; 
uint public funding_end; 
uint public vesting_start; 
uint public vesting_end; 
uint public cliff_end; 

bool public deal; 

uint public tokens_to_emit; // number of tokens to be emitted by the new DAO

Token token_a;
Token token_b; 

// NB: no need for cliff_start because it is = to vesting_start

address public admin; // the admin of this smart contract 

constructor(){
    admin = msg.sender; 
    deal = false;

    token_a = Token(daos[0]); 
    token_b = Token(daos[1]); 
}

modifier adminOnly {
    require(tx.origin == admin, "only the admin can call this method"); 
    _; 
}

modifier tokenHolderOnly {
    require(msg.sender == token_holders[0] || msg.sender == token_holders[1], "only token holders can call this method"); 
    _; 
}

modifier ifDeal {
    require(deal, "no deal was struck between the two parties"); 
    _; 
}

function if_enough_funds() public view returns (bool) { 
    Token a = Token(daos[0]); 
    Token b = Token(daos[1]); 
    
    if((a.balanceOf(address(this)) >= (dao_totalSupply[daos[0]] / 2)) && (b.balanceOf(address(this)) >= (dao_totalSupply[daos[1]] / 2))) {
        return true; 
    } else {
        return false; 
    }
} 
function on_time(uint start, uint end, uint current) public pure returns (bool) {
    if (current >= start && current <= end) {
        return true; 
    } else {
        return false; 
    }
}
/* 
fills_blanks() takes in all the parameters that were defined as the blanks in the SNF and persists them in the smart contract
*/
function fill_blanks(uint256 _a_valuation,uint256 _b_valuation,uint256 _funding_period, uint256 _vesting_period,uint256 _cliff_period, uint256 _tokens_to_emit, bool _deal) public override adminOnly returns (bool _success) { // fills the blank of the SNF is agreement is struck
    if(_deal == false){ 
        // TODO: add self destruct the SM
        return false; 
    }
    dao_valuations[daos[0]] = _a_valuation; 
    dao_valuations[daos[1]] = _b_valuation; 
    cliff_period = _cliff_period;
    vesting_period = _vesting_period; 
    funding_period = _funding_period; 

    tokens_to_emit = _tokens_to_emit; 

    funding_start = block.timestamp; 
    funding_end = funding_start + funding_period*60*60; // in days

    deal = _deal; 

    return true; 
}

/*
fund() takes no parameters. It can only be called by a token_holder, it also needs a deal to exist and can only be called during the funding period

Essentially what it does it it locks the token of the token_holder into the admin's account
 
*/

function fund() public override ifDeal tokenHolderOnly returns (bool _success) {
        // fund the SM 
        // this will be called by either token_holder only
     require(on_time(funding_start,funding_end,block.timestamp), "funding period has passed"); 
 

     if(msg.sender == token_holders[0]) { 
       token_a.transfer(admin, token_a.balanceOf(token_holders[0])); 
    } else {
       token_b.transfer(admin, token_b.balanceOf(token_holders[1])); 
    }

    return true; 
} 

/*
execute() takes in no parameters. It first checks if enough funds where locked from both parties. If it is the case,
it creates the token of the new DAO and distributes shares to the two parties according to the valuations of their daos

the formula used is: tokens_to_emit * ( valuation_a / (valuation_a + valuation_b)) (NB: replace the numerator by the dao you are sending funds to)
*/
function execute() public override returns (bool) {

    require(if_enough_funds()); 

    Token newDAO = new Token(tokens_to_emit); // we will need that address for the demo TODO: add event to return the address

    newDAO.transfer(token_holders[0], 
    tokens_to_emit*(dao_valuations[daos[0]]/(dao_valuations[daos[0]]+dao_valuations[daos[1]]))); 
    
    newDAO.transfer(token_holders[1], 
    tokens_to_emit*(dao_valuations[daos[1]]/(dao_valuations[daos[0]]+dao_valuations[daos[1]]))); 

    return true; 
    } 
}
