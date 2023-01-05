import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Search from '../../components/Search/Search';
import LatestTransactions from '../../components/Latest/LatestTransactions';
import LatestBlocks from '../../components/Latest/LatestBlocks';
import { AlchemyContext } from '../../App';
import MainSkeleton from './MainSkeleton';
import { Block, BlockGroup, Title } from './mainStyles';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latestBlock, setLatestBlock] = useState(null);

  const alchemy = useContext(AlchemyContext);

  useEffect(() => {
    async function getLatestBlock() {
      setIsLoading(true);
      const block = await alchemy.core.getBlock();
      setLatestBlock(block);
      setIsLoading(false);
    }

    getLatestBlock();
  }, [alchemy]);

  return (
    <Container>
      <Header />
      <Search />
      {isLoading ? (
        <MainSkeleton />
      ) : (
        <BlockGroup>
          <Block>
            <Title>Latest Blocks</Title>
            <LatestBlocks blockNum={latestBlock.number} />
            <Button to="/blocks">All blocks</Button>
          </Block>
          <Block>
            <Title>Latest Transactions</Title>
            <LatestTransactions
              transactions={latestBlock.transactions.slice(0, 10)}
            />
            <Button to="/transactions">All transactions</Button>
          </Block>
        </BlockGroup>
      )}
    </Container>
  );
};

export default Main;
