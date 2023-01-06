const hre = require('hardhat');

const CONTRACT_ADDR = '0xcccb984B9cAEd04c1d6b5Eb8f7aF5D31DA76eD2a';

async function main() {
  const contract = await hre.ethers.getContractAt('Contract', CONTRACT_ADDR);

  const tx = await contract.changeX(100);
  await tx.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
