const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  const block = {};

  block.id = blocks.length

  const transactions = [];
  while (mempool.length > 0 && transactions.length < MAX_TRANSACTIONS) {
    transactions.push(mempool.pop());
  }
  block.transactions = transactions;

  let nonce = 0;
  let blockHash = [];
  do {
    block.nonce = nonce;

    const blockString = JSON.stringify(block);
    blockHash = SHA256(blockString);
    nonce++;
  } while (BigInt(`0x${blockHash}`) >= TARGET_DIFFICULTY);

  block.hash = blockHash;

  blocks.push(block);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool
};