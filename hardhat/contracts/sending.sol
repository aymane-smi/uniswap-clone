//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
import "hardhat/console.sol";
/**
@author aymane
**/
contract send{
    //uint is the same as uint256
    event TransactionDetail(address sender, address receiver, uint amount, uint timestamp);

    //function that let use send money from wallet to another one
    function sendingETH(address payable receiver) public payable{
        //transfer it cost 2300 gas fee
        //if gas fees are not sufficient it throws an error
        //their is more methods for sending eth like "call" or "send"
        receiver.transfer(msg.value);
        console.log(msg.sender, receiver, msg.value);
        emit TransactionDetail(msg.sender, receiver, msg.value, block.timestamp);
    }
}