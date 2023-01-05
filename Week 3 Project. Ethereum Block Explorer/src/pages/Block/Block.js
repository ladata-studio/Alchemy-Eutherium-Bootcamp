import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from '../../components/Container/Container';

export async function loader({ params }) {
  return { number: params.blockNum };
}

const Block = () => {
  const block = useLoaderData();

  return (
    <Container>
      <h1>Block {block.number}</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default Block;
