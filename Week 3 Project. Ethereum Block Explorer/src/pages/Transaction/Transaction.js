import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from '../../components/Container/Container';
import truncateString from '../../utils/truncateString';

export async function loader({ params }) {
  return { hash: params.txHash };
}

const Transaction = () => {
  const tx = useLoaderData();

  return (
    <Container>
      <h1>Transaction {truncateString(tx.hash, 22)}</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default Transaction;
