import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';

const Block = () => {
  const { block } = useParams();

  return (
    <Container>
      <h1>Block {block}</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default Block;
