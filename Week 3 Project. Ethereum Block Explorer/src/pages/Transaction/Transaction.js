import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import truncateString from '../../utils/truncateString';

const Transaction = () => {
  const { tx } = useParams();

  return (
    <Container>
      <h1>Transaction {truncateString(tx, 22)}</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default Transaction;
