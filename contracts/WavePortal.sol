// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4; // make sure that this is the same as the version found in hardhat.config.js

import "hardhat/console.sol";

contract WavePortal {
      uint256 totalWaves;

      constructor(){
           console.log("Welcome to the Wave Portal!");
      }

      function wave() public{
            totalWaves++;
            console.log("%s waved", msg.sender);
      }

      function getTotalWaves() public view returns(uint256){
            console.log("Total Waves: %d", totalWaves);
            return totalWaves;
      }

}