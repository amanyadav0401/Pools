//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Cake is ERC20 {
    address admin = msg.sender;
    constructor(string memory name, string memory symbol,uint amount) ERC20(name,symbol){
        
        admin = msg.sender;
        _mint(msg.sender,amount*10**18);
    }
    function mintToken(address to, uint _amount) public{
        require(msg.sender == admin, "Only Admin");
        _mint(to,_amount);
    }
    
    function burn (address from,uint _amount) public {
        _burn(from, _amount);
    }

    

}