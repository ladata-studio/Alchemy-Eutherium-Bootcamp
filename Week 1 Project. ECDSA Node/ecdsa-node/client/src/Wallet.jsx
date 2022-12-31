import server from './server';
import * as secp from 'ethereum-cryptography/secp256k1';
import { toHex } from 'ethereum-cryptography/utils';
import getAddress from './scripts/getAddress';
import { useEffect } from 'react';

function Wallet({
  address,
  setAddress,
  balance,
  setBalance,
  privateKey,
  setPrivateKey,
}) {
  useEffect(() => {
    const getBalance = async () => {
      if (address) {
        const {
          data: { balance },
        } = await server.get(`balance/${address}`);
        setBalance(balance);
      } else {
        setBalance(0);
      }
    };

    getBalance().catch(console.error);
  }, [address]);

  const onChange = ({ target }) => {
    const newPrivateKey = target.value;
    setPrivateKey(newPrivateKey);

    if (newPrivateKey.length === 66 && newPrivateKey.slice(0, 2) === '0x') {
      const publicKey = secp.getPublicKey(newPrivateKey.slice(2));
      const newAddress = toHex(getAddress(publicKey));
      setAddress(newAddress);
    } else {
      setAddress('');
      setBalance(0);
    }
  };

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input
          placeholder="Type your private key, for example: 0x1"
          value={privateKey}
          onChange={onChange}
          required
        ></input>
        {address && (
          <p style={{ fontSize: '10px', color: 'GrayText' }}>
            Address: 0x{address}
          </p>
        )}
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
