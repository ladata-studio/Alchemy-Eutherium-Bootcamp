const express = require('express');
const app = express();
const cors = require('cors');
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  '19118731aa60cb0987d3abb81687cea0a9ca2055': 100,
  'c9319b457985cbff62c468f2c372083a6ce1b861': 50,
  '845dc093826a6c017caba7589c7c49cd4247b346': 75,
};

app.get('/balance/:address', (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post('/send', (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: 'Not enough funds!' });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    console.log(balances[sender], balances[recipient]);
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
