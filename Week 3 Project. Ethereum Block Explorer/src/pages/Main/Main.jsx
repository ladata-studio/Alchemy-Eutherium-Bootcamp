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
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [latestBlock, setLatestBlock] = useState(null);
  const [latestTxs, setLatestTxs] = useState([]);

  const alchemy = useContext(AlchemyContext);

  useEffect(() => {
    async function getLatestBlocks() {
      setIsLoading(true);
      const latestBlockNumber = await alchemy.core.getBlockNumber();
      const block = await alchemy.core.getBlock();
      setLatestBlock(block);

      for (let i = 0; i < 10; i++) {
        const block = await alchemy.core.getBlock(latestBlockNumber - i);
        setLatestBlocks((lb) => [...lb, block]);
      }
      setIsLoading(false);
    }

    getLatestBlocks();
  }, [alchemy]);

  useEffect(() => {
    async function getLatestTxs() {
      if (latestBlock) {
        setIsLoading(true);
        const latestTxsHashes = latestBlock.transactions.slice(0, 10);
        for (let i = 0; i < 10; i++) {
          const hash = latestTxsHashes[i];
          const tx = await alchemy.core.getTransaction(hash);
          setLatestTxs((ltxs) => [...ltxs, tx]);
        }
        setIsLoading(false);
      }
    }

    getLatestTxs();
  }, [alchemy, latestBlock]);

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
            <LatestBlocks blocks={latestBlocks} />
            <Button to="/blocks">All blocks</Button>
          </Block>
          <Block>
            <Title>Latest Transactions</Title>
            <LatestTransactions transactions={latestTxs} />
            <Button to="/transactions">All transactions</Button>
          </Block>
        </BlockGroup>
      )}
    </Container>
  );
};

export default Main;
