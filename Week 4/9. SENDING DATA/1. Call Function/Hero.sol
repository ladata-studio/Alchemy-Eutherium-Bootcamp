// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Hero {
    bool public alerted;

    function alert() external {
        alerted = true;
    }
}