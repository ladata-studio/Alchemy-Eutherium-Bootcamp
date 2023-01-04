const { Wallet, providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

// /**
//  * Given an ethereum address find all the addresses
//  * that were sent ether from that address
//  * @param {string} address - The hexidecimal address for the sender
//  * @async
//  * @returns {Array} all the addresses that receieved ether
//  */
async function findEther(address) {
  const addresses = [];
  for (let i = 1; i <= 3; i++) {
    const block = await provider.getBlockWithTransactions(i);
    block.transactions.forEach((tx) =>
      tx.from === address ? addresses.push(tx.to) : none
    );
  }
  return addresses;
}

module.exports = findEther;
