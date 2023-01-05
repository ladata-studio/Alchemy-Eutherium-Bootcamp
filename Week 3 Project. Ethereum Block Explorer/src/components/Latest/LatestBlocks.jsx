import React from 'react';
import LatestBlock from './LatestBlock';
import { Table, TableWrap } from './tableStyles';

const LatestBlocks = ({ blockNum }) => {
  const blocks = Array.from({ length: 10 }, (_, i) => blockNum - i);
  return (
    <TableWrap>
      <Table type="block">
        {blocks.map((block) => (
          <LatestBlock
            blockNum={block}
            key={`block_${block}`}
          />
        ))}
      </Table>
    </TableWrap>
  );
};

export default LatestBlocks;
