const hre = require('hardhat');

async function main() {
  // hardhat-ethers
  const Contract = await hre.ethers.getContractFactory('Contract');
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log(`Contract was deployed to ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
