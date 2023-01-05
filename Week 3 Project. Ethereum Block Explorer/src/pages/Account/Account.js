import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from '../../components/Container/Container';
import truncateString from '../../utils/truncateString';

export async function loader({ params }) {
  return { hash: params.accountHash };
}

const Account = () => {
  const account = useLoaderData();

  return (
    <Container>
      <h1>Account {truncateString(account.hash, 22)}</h1>
      <Link to="/">{`←`} Main page</Link>
    </Container>
  );
};

export default Account;
