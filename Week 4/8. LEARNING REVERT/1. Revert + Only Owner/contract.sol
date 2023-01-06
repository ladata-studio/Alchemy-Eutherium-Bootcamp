// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Contract {
    address deployer;

    constructor() payable {
        require(msg.value >= 1 ether);
        deployer = msg.sender;
    }

    function withdraw() public {
        require(msg.sender == deployer);
        (bool s, ) = msg.sender.call{ value: address(this).balance }("");
        require(s);
    }
}