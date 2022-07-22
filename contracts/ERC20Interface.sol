// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface ERC20Interface {
    // returns the token name
    function name() external view returns (string memory);

    // returns the token symbol
    function symbol() external view returns (string memory);

    // returns the number of decimals of the token
    function decimals() external view returns (uint8);

    // returns the total amount of tokens
    function totalSupply() external view returns (uint256);

    // returns the amount of tokens owned by an account
    function balanceOf(address account) external view returns (uint256);

    // transfers amount of tokens to the recipient
    //
    // the return value is a boolean, representing a successful transfer
    function transfer(address recipient, uint256 amount)
        external
        returns (bool);

    // returns the remaining number of tokens that the owner allows
    // a spender to spend the return value should be 0 by default
    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    // sets the amount of allowance for a spender to
    // transfer from the function caller
    function approve(address spender, uint256 amount) external returns (bool);

    // transfers a certain amount (from the caller's allowance) of tokens
    // from sender to recipient using the allowance mechanism
    //
    // the return value is a boolean, representing a successful transfer
    //
    // this function will emit a Transfer event
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    // emitted when the amount of tokens is transfered from the `from` account
    // to the `to` account
    event Transfer(address indexed from, address indexed to, uint256 value);

    // emitted when the allowance is approved by the owner, indicating
    // the spender can use `value` amount of tokens from owner
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

