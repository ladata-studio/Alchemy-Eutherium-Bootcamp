class MerkleTree {
  constructor(leaves, concat) {
    this.leaves = leaves;
    this.concat = concat;
  }

  getRoot() {
    let currLeaves = this.leaves;
    for (let k = 0; k < Math.ceil(Math.log2(this.leaves.length)); k++) {
      let nextLeaves = [];
      for (let i = 0; i < currLeaves.length; i += 2) {
        if (currLeaves[i + 1]) {
          nextLeaves.push(this.concat(currLeaves[i], currLeaves[i + 1]));
        } else {
          nextLeaves.push(currLeaves[i]);
        }
      }
      currLeaves = nextLeaves;
    }
    return currLeaves[0];
  }

  getProof(num) {
    let from, to;
    let proof = [];
    for (let i = 0; i < Math.ceil(Math.log2(this.leaves.length)); i++) {
      let d = 2 ** i;
      let index = Math.floor(num / d);
      let left = Boolean(index % 2);

      if (left) {
        from = (index - 1) * d;
      } else {
        from = (index + 1) * d;
      }
      to = from + d;

      const subTree = new MerkleTree(this.leaves.slice(from, to), this.concat);
      const data = subTree.getRoot();
      if (data) {
        proof.push({ data: data, left: left });
      }
    }

    return proof;
  }
}