function verifyProof(proof, node, root, concat) {
  let curr = node;
  for (let step of proof) {
    curr = step.left ? concat(step.data, curr) : concat(curr, step.data);
  }
  if (curr === root) {
    return true;
  }
  return false;
}

module.exports = verifyProof;
