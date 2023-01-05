import React from 'react';
import LatestTransaction from './LatestTransaction';
import { Table, TableWrap } from './tableStyles';

const LatestTransactions = ({ transactions }) => {
  return (
    <TableWrap className="scrollbar">
      <Table type="tx">
        {transactions.map((tx, index) => (
          <LatestTransaction
            txHash={tx}
            key={index}
          />
        ))}
      </Table>
    </TableWrap>
  );
};

export default LatestTransactions;
