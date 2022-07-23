pragma solidity ^0.8.0; 

import "./SNF.sol"; 

contract SNFFactory { 

    SNF[] public deployedSNFs; 
    address public admin; 

    constructor() {
        admin = msg.sender; 
    }

    function createSNF(address source_dao, address target_dao, string memory _description) public {
        deployedSNFs.push(new SNF(admin,source_dao,target_dao,tx.origin,_description)); 
    }

    function getSNFLength() public view returns (uint256 len) { 
        return deployedSNFs.length; 
    }
}