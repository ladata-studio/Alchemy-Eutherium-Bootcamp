// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ContractOne {
  uint public x;

  constructor(uint _x) {
    x = _x;
  }

  function increment() external {
    x++;
  }

  function add(uint y) external view returns(uint) {
    return x + y;
  }
}


contract ContractTwo {
  function double(uint x) external pure returns(uint) {
    return x * 2;
  }

  function double(uint x, uint y) external pure returns(uint, uint) {
    return(x * 2, y * 2);
  }
}