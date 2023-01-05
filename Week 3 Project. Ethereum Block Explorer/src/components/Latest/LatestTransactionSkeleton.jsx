import { Cell, Tag } from './tableStyles';

const LatestTransactionSkeleton = () => {
  return (
    <>
      <Cell skeleton="true">
        <Tag>0x{'0'.repeat(12)}...</Tag>
      </Cell>
      <Cell skeleton="true">0x{'0'.repeat(8)}...</Cell>
      <Cell className="cell--centered">➡️</Cell>
      <Cell>💰 00.0000 ETH</Cell>
      <Cell className="cell--centered">➡️</Cell>
      <Cell skeleton="true">0x{'0'.repeat(8)}...</Cell>
    </>
  );
};

export default LatestTransactionSkeleton;
