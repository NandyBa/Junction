// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface SNFInterface {

    enum Status {REJECTED, FUNDING, VESTING, PENDING_VALIDATION, VALIDATED, COMPLETED, SUBMITTED} // 0 1 2 3 4 5 6

    struct Proposal {

    Status status; 
    address[2] daos; // first slot is for the proposing dao and second dao is for the proposed to dao
    address[2] token_holders;  // first slot is for the user who made the proposal and second slot is for the responder
    
    string description; 
    uint256 funding_period; 
    uint256 vesting_period; 
    uint256 cliff_period; 
    uint256 token_proportion; // from the POV of the proposing DAO, i.e if it is 0.3 it means 30% for the proposing DAO and 70% to the other
    uint tokens_to_emit;

    uint funding_start; 
    uint funding_end; 
    uint vesting_start; 
    uint vesting_end; 
    uint cliff_end; 

}
    function fill_blanks(uint256 _token_proportion,
    uint256 _funding_period, 
    uint256 _vesting_period,
    uint256 _cliff_period, 
    uint256 _tokens_to_emit,
    bool _deal) external returns (bool _success);

    function fund() external returns (bool _success); 

    function execute() external returns (bool); 

    function set_target_token_holder() external; 

    event DoneDeal (
        address _mergedDAOAddress
    ); 

    event Valid(
        Status status
    ); 

}
