pragma solidity ^0.8.0; 

interface SNFFactoryInterface {
	
	function createSNF(address sourceDAO, address targetDAO, string memory description) external; 
	event SNF(
		address SNF
	); 
}
