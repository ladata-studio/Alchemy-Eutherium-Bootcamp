// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Contract {
	uint public value;

	function modify(uint _value) external {
		value = _value;
	}
}