const { keccak256 } = require('ethereum-cryptography/keccak');
const secp = require('ethereum-cryptography/secp256k1');
const { toHex } = require('ethereum-cryptography/utils');

function getAddress(publicKey) {
  const hash = keccak256(publicKey.slice(1));
  const address = hash.slice(-20);
  return address;
}

const generateKeyPair = () => {
  const privateKey = secp.utils.randomPrivateKey();
  const publicKey = secp.getPublicKey(toHex(privateKey));

  const keyPair = [privateKey, publicKey];
  return keyPair;
};

const keyPair = generateKeyPair();
const privateKey = toHex(keyPair[0]);
const publicKey = toHex(keyPair[1]);
const address = toHex(getAddress(keyPair[1]));

console.log(`private key: 0x${privateKey}`);
console.log(`public key: 0x${publicKey}`);
console.log(`address: 0x${address}`);
