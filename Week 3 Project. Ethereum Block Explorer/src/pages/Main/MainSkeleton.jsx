import React from 'react';
import { Button } from '../../components/Button/buttonStyles';
import LatestBlockSkeleton from '../../components/Latest/LatestBlockSkeleton';
import LatestTransactionSkeleton from '../../components/Latest/LatestTransactionSkeleton';
import { Table, TableWrap } from '../../components/Latest/tableStyles';
import { Block, BlockGroup, Title } from './mainStyles';

const MainSkeleton = () => {
  return (
    <BlockGroup>
      <Block>
        <Title>Latest Blocks</Title>
        <TableWrap>
          <Table type="block">
            {[...Array(10)].map((el, index) => (
              <LatestBlockSkeleton key={index} />
            ))}
          </Table>
        </TableWrap>
        <Button to="/blocks">All blocks</Button>
      </Block>

      <Block>
        <Title>Latest Transactions</Title>
        <TableWrap>
          <Table type="tx">
            {[...Array(10)].map((el, index) => (
              <LatestTransactionSkeleton key={index} />
            ))}
          </Table>
        </TableWrap>
        <Button to="/transactions">All transactions</Button>
      </Block>
    </BlockGroup>
  );
};

export default MainSkeleton;
