const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL =
  'https://eth-goerli.g.alchemy.com/v2/w00JIUqIzw1ULHXHCS7L-8zKDLSvqSrx';

axios
  .post(ALCHEMY_URL, {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getBlockByNumber',
    params: [
      '0xb443', // block 46147
      false, // retrieve the full transaction object in transactions array
    ],
  })
  .then((response) => {
    console.log(response.data.result);
  });

axios
  .post(ALCHEMY_URL, {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_getBalance',
    params: ['0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', 'latest'],
  })
  .then((response) => {
    console.log(response.data.result);
  });
