import React from 'react';
import truncateString from '../../utils/truncateString';
import { Cell, Link, Row, Table, TableWrap, Tag, Body } from './tableStyles';

const LatestBlocks = ({ blocks }) => {
  return (
    <TableWrap>
      <Table>
        <Body>
          {blocks.map((block, index) => (
            <Row key={index}>
              <Cell>
                <Link href={`/${block.number}`}>
                  <Tag>{block.number}</Tag>
                </Link>
              </Cell>
              <Cell>
                <Link href={`/${block.number}/transactions`}>
                  {block.transactions.length} txns
                </Link>
              </Cell>
              <Cell>
                💰 ➡️{' '}
                <Link href={`/account/${block.miner}`}>
                  {truncateString(block.miner, 42)}
                </Link>
              </Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </TableWrap>
  );
};

export default LatestBlocks;
