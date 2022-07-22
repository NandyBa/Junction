// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface SNFInterface {

    function fill_blanks(uint256 _a_valuation,
    uint256 _b_valuation,
    uint256 _funding_period, 
    uint256 _vesting_period,
    uint256 _cliff_period, 
    uint256 _tokens_to_emit,
    bool _deal) external returns (bool _success);

    function fund() external returns (bool _success); 

    function execute() external returns (bool); 

}

