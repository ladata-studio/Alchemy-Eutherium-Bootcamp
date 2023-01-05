import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';


const BlockTransactions = () => {
  const { block } = useParams();

  return (
    <Container>
      <h1>Block {block} Transactions</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default BlockTransactions;
