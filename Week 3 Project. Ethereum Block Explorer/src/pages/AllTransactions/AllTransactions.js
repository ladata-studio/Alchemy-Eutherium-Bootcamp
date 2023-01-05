import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

const AllTransactions = () => {
  return (
    <Container>
      <h1>All Transactions</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default AllTransactions;
