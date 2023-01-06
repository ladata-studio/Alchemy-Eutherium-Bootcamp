// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    uint counter = 10;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function tick() external {
        counter--;
        if (counter == 0) {
            selfdestruct(payable(owner));
        }
    }
}