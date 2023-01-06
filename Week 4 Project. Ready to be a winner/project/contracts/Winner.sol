// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Winner {
    address recepient = 0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502;
    function attempt() external {
        (bool success, ) = recepient.call(
            abi.encodeWithSignature("attempt()")
        );
        require(success);
    }
}