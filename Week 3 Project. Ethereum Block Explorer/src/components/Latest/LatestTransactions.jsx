import React from 'react';
import truncateString from '../../utils/truncateString';
import { Body, Cell, Link, Row, Table, TableWrap, Tag } from './tableStyles';

const LatestTransactions = ({ transactions }) => {
  return (
    <TableWrap className="scrollbar">
      <Table>
        <Body>
          {transactions.map((tx, index) => {
            const eth = parseInt(tx.value._hex);
            return (
              <Row key={index}>
                <Cell>
                  <Link href={`/transaction/${tx.hash}`}>
                    <Tag>{truncateString(tx.hash, 14)}</Tag>
                  </Link>
                </Cell>
                <Cell>
                  <Link href={`/account/${tx.from}`}>
                    {truncateString(tx.from, 10)}
                  </Link>
                </Cell>
                <Cell>➡️</Cell>
                <Cell>{eth ? `💰 ${(eth / 1e18).toFixed(4)}` : 0} ETH</Cell>
                <Cell>➡️</Cell>
                <Cell>
                  <Link href={`/account/${tx.to}`}>
                    {truncateString(tx.to, 10)}
                  </Link>
                </Cell>
              </Row>
            );
          })}
        </Body>
      </Table>
    </TableWrap>
  );
};

export default LatestTransactions;
