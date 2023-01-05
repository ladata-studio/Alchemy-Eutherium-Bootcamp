import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Error from './pages/Error/Error';
import Main from './pages/Main/Main';
import AllBlocks from './pages/AllBlocks/AllBlocks';
import AllTransactions from './pages/AllTransactions/AllTransactions';
import Block, { loader as blockLoader } from './pages/Block/Block';
import Transaction, {
  loader as txLoader,
} from './pages/Transaction/Transaction';
import Account, { loader as accountLoader } from './pages/Account/Account';
import BlockTransactions, {
  loader as blockTxsLoader,
} from './pages/BlockTransactions/BlockTransactions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <App>
        <Error />
      </App>
    ),
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/blocks',
        element: <AllBlocks />,
      },
      {
        path: '/transactions',
        element: <AllTransactions />,
      },
      {
        path: '/:blockNum',
        element: <Block />,
        loader: blockLoader,
      },
      {
        path: '/transaction/:txHash',
        element: <Transaction />,
        loader: txLoader,
      },
      {
        path: '/account/:accountHash',
        element: <Account />,
        loader: accountLoader,
      },
      {
        path: '/:blockNum/transactions',
        element: <BlockTransactions />,
        loader: blockTxsLoader,
      },
    ],
  },
]);
