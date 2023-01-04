import React from 'react';
import { Header, H1 } from './headerStyles';

const HeaderComponent = () => {
  return (
    <Header>
      <a href="/">
        <H1>ETH Blockchain Explorer</H1>
      </a>
    </Header>
  );
};

export default HeaderComponent;
