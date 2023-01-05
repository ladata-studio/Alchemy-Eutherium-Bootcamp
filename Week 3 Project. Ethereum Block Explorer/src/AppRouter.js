import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Error from './pages/Error/Error';
import Main from './pages/Main/Main';
import AllBlocks from './pages/AllBlocks/AllBlocks';
import AllTransactions from './pages/AllTransactions/AllTransactions';
import Block from './pages/Block/Block';
import Transaction from './pages/Transaction/Transaction';
import Account from './pages/Account/Account';
import BlockTransactions from './pages/BlockTransactions/BlockTransactions';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<Main />}
      />
      <Route
        path="/blocks"
        element={<AllBlocks />}
      />
      <Route
        path="/transactions"
        element={<AllTransactions />}
      />
      <Route
        path="/:block"
        element={<Block />}
      />
      <Route
        path="transaction/:tx"
        element={<Transaction />}
      />
      <Route
        path="/account/:account"
        element={<Account />}
      />
      <Route
        path="/:block/transactions"
        element={<BlockTransactions />}
      />
      <Route
        path="*"
        element={<Error />}
      />
    </Routes>
  </Router>
);
