const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(data) {
    this.data = data;
    this.previousHash = null;
  }

  toHash() {
    const hash = SHA256(this.data + this.previousHash);
    return hash  // a hash!
  }
}

module.exports = Block;
