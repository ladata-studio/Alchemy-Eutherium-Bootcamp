const Node = require('./Node.js');

class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    if (this.root === null) {
      this.root = node;
    } else {
      let parent = this.root;

      while (true) {
        if (parent.left && parent.right) {
          if (node.data < parent.left.data) {
            parent = parent.left;
          } else {
            parent = parent.right;
          }
        } else {
          if (node.data < parent.data) {
            if (parent.left) {
              parent = parent.left;
            } else {
              parent.left = node;
              break;
            }
          } else {
            if (parent.right) {
              parent = parent.right;
            } else {
              parent.right = node;
              break;
            }
          }
        }
      }
    }
  }

  hasNode(number) {
    let curr = this.root;
    while (true) {
      if (number === curr.data) {
        return true;
      }

      if (!curr.left && !curr.right) {
        return false;
      }

      if (curr.left && number < curr.data) {
        curr = curr.left;
      } else if (curr.right && number >= curr.data) {
        curr = curr.right;
      }
    }
  }
}

module.exports = Tree;
