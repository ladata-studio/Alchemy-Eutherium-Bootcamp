// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ContractOne {
	bool public a = true;
	bool public b = false;
}

contract ContractTwo {
  uint8 public a = 255;
  uint16 public b = 33000;
  uint256 public sum = a + b;
}

contract ContractThree {
  int8 public a = 60;
  int8 public b = -50;
  int16 public difference = a - b;
}

contract ContractFour {
	bytes32 public msg1 = "Hello World";
  string public msg2 = "Hello World! Hello World! Hello World!";
}

contract ContractFive {
  enum Foods { Apple, Pizza, Bagel, Banana }

	Foods public food1 = Foods.Apple;
	Foods public food2 = Foods.Pizza;
	Foods public food3 = Foods.Bagel;
	Foods public food4 = Foods.Banana;
}
