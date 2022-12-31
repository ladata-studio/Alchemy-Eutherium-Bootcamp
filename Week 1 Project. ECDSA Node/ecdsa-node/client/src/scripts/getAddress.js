import { keccak256 } from 'ethereum-cryptography/keccak';

export default function getAddress(publicKey) {
  const hash = keccak256(publicKey.slice(1));
  const address = hash.slice(-20);
  return address;
}
