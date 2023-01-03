const TrieNode = require('./TrieNode');

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let currentNode = this.root;
    for (const letter of word) {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new TrieNode(letter);
      }
      currentNode.isWord = false;
      currentNode = currentNode.children[letter];
    }
    currentNode.children = {};
    currentNode.isWord = true;
  }

  contains(word) {
    let currentNode = this.root;
    for (const letter of word) {
      if (!currentNode.children[letter]) {
        return false;
      }
      currentNode = currentNode.children[letter];
    }
    if (!currentNode.isWord) {
      return false;
    }
    return true;
  }
}

let trie = new Trie();
trie.insert('HELLO');
trie.insert('HERMIT');
console.log(trie.contains('GELLO'));

module.exports = Trie;
