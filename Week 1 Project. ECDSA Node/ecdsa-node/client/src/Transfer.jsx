import { useState } from 'react';
import server from './server';

function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient: recipient.slice(2),
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  const isValidSenderAddressLength = address.length === 40;
  const isValidRecipientAddress =
    recipient.length === 42 && recipient.slice(0, 2) === '0x';
  const isPositiveAmount = sendAmount > 0;
  const differentSenderAndRecipient = address !== recipient.slice(2);

  const isValid =
    isValidSenderAddressLength &&
    isValidRecipientAddress &&
    isPositiveAmount &&
    differentSenderAndRecipient;

  return (
    <form
      className="container transfer"
      onSubmit={transfer}
    >
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
          required
        ></input>
      </label>

      <label>
        Recipient address
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
          required
        ></input>
      </label>

      <input
        type="submit"
        className="button"
        value="Transfer"
        disabled={!isValid}
      />
    </form>
  );
}

export default Transfer;
