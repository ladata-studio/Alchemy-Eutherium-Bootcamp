import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import truncateString from '../../utils/truncateString';

const Account = () => {
  const { account } = useParams();

  return (
    <Container>
      <h1>Account {truncateString(account, 22)}</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default Account;
