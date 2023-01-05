import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

const AllBlocks = () => {
  return (
    <Container>
      <h1>All Blocks</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default AllBlocks;
