// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC20Interface.sol";

contract Token is ERC20Interface {
    string public constant _name = "Test token";
    string public constant _symbol = "TST";
    uint8 private constant _decimals = 18;
    uint256 private _totalSupply = 1000000000;
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    address private deployer;

    constructor(uint256 _initialSupply) {
        _totalSupply = _initialSupply;
        // assign all tokens to deployer
        _balances[tx.origin] = _initialSupply;
        deployer = tx.origin;
    }
     function name() public view virtual override returns (string memory) {
        return _name;
    }

    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }
    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account)
        public
        view
        virtual
        override
        returns (uint256)
    {
        return _balances[account];
    }

    // the recipient cannot be the zero address
    function transfer(address recipient, uint256 amount)
        public
        virtual
        override
        returns (bool)
    {
        _transfer(tx.origin, recipient, amount);
        return true;
    }

    function allowance(address owner, address spender)
        public
        view
        virtual
        override
        returns (uint256)
    {
        return _allowances[owner][spender];
    }

    // the spender cannot be the zero address
    function approve(address spender, uint256 amount)
        public
        virtual
        override
        returns (bool)
    {
        _approve(tx.origin, spender, amount);
        return true;
    }

    // the function may emit two events: Transfer and Approval
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        uint256 currentAllowance = _allowances[sender][tx.origin];
        if (currentAllowance != type(uint256).max) {
            require(
                currentAllowance >= amount,
                "Transfer amount exceeds allowance"
            );
            unchecked {
                _approve(sender, tx.origin, currentAllowance - amount);
            }
        }

        _transfer(sender, recipient, amount);

        return true;
    }

    // moves amount of tokens from sender to recipient
    //
    // the sender and recipient cannot be the zero address
    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal virtual {
        require(sender != address(0), "Transfer from the zero address");
        require(recipient != address(0), "Transfer to the zero address");

        uint256 senderBalance = _balances[sender];
        require(
            senderBalance >= amount,
            "Transfer amount exceeds account balance"
        );
        unchecked {
            _balances[sender] = senderBalance - amount;
        }
        _balances[recipient] += amount;

        emit Transfer(sender, recipient, amount);
    }

    // sets the amount as the allowance of owner's tokens for spender
    //
    // the owner and spender cannot be the zero address
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "Approve from the zero address");
        require(spender != address(0), "Approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function getInReserve() public view returns(uint256) {
        return _balances[deployer];
    }

    function getInCirculation() public view returns(uint256) {
        return _totalSupply - _balances[deployer];
    }

    function burnFrom(address burner, uint amount) public {
            // Only the deployer can burn tokens
            require(msg.sender == deployer, "You must be the owner of this token to burn tokens.");
            require(_balances[burner] >= amount, "You do not have enough tokens.");

            _balances[burner] = _balances[burner] - amount;

            emit Transfer(burner, address(0), amount);
    }



}
