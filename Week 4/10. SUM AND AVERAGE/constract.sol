// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Contract {
    function sumAndAverage(uint a, uint b, uint c, uint d) external pure returns(uint, uint) {
        uint sum = a + b + c + d;
        uint avg = sum / 4;
        return (sum, avg);
    }
}