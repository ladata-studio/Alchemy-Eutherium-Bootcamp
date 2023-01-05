import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

const Error = () => {
  return (
    <Container>
      <h1>404. Not Found</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default Error;
