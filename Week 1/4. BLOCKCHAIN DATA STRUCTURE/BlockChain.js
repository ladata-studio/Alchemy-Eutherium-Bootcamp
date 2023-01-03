const Block = require('./Block');

class Blockchain {
  constructor() {
    this.chain = [new Block];
  }

  addBlock(block) {
    block.previousHash = this.chain.slice(-1)[0].toHash();
    this.chain.push(block);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const block = this.chain[i];
      const prevBlock = this.chain[i - 1];
      if (block.previousHash.toString() !== prevBlock.toHash().toString()) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;