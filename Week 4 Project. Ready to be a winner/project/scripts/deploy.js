const hre = require('hardhat');

async function main() {
  // hardhat-ethers
  const Winner = await hre.ethers.getContractFactory('Winner');
  const winner = await Winner.deploy();

  await winner.deployed();

  console.log(`Winner was deployed to ${winner.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
