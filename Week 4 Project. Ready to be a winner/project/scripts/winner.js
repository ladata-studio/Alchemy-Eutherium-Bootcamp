const hre = require('hardhat');

const CONTRACT_ADDR = '0x9dDc8c2DcAcDe434295FC101b807781890F63Edb';

async function main() {
  const contract = await hre.ethers.getContractAt('Contract', CONTRACT_ADDR);

  const tx = await contract.attempt();
  await tx.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
