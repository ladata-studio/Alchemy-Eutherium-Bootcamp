import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Error from './pages/Error/Error';
import Main from './pages/Main/Main';
import AllBlocks from './pages/AllBlocks/AllBlocks';
import AllTransactions from './pages/AllTransactions/AllTransactions';
import Block from './pages/Block/Block';
import Transaction from './pages/Transaction/Transaction';
import Account from './pages/Account/Account';
import BlockTransactions from './pages/BlockTransactions/BlockTransactions';

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
        path: '/:block',
        element: <Block />,
      },
      {
        path: '/transaction/:tx',
        element: <Transaction />,
      },
      {
        path: '/account/:account',
        element: <Account />,
      },
      {
        path: '/:block/transactions',
        element: <BlockTransactions />,
      },
    ],
  },
]);
