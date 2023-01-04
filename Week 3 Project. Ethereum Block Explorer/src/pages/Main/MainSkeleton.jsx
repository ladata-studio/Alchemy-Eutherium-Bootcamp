import React from 'react';
import { Button } from '../../components/Button/buttonStyles';
import { Loading } from './mainSkeletonStyles';
import { Block, BlockGroup, Title } from './mainStyles';

const MainSkeleton = () => {
  return (
    <BlockGroup>
      <Block>
        <Title>Latest Blocks</Title>
        <Loading>Loading...</Loading>
        <Button>All blocks</Button>
      </Block>
      <Block className="main__column">
        <Title>Latest Transactions</Title>
        <Loading>Loading...</Loading>
        <Button>All transactions</Button>
      </Block>
    </BlockGroup>
  );
};

export default MainSkeleton;
