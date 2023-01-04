const provider = require('./provider');

async function getTotalBalance(addresses) {
  const requests = addresses.map((address, index) => {
    return {
      jsonrpc: '2.0',
      id: index + 1,
      method: 'eth_getBalance',
      params: [address, 'latest'],
    };
  });
  const response = await provider.send(requests);

  // return the total balance of all the addresses
  const totalBalance = response.reduce(
    (total, res) => parseInt(res.result, 16) + total,
    0
  );

  return totalBalance;
}

module.exports = getTotalBalance;
