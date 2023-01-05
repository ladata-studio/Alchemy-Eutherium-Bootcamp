import { Cell, Tag } from './tableStyles';

const LatestBlockSkeleton = () => {
  return (
    <>
      <Cell skeleton="true">
        <Tag>{'0'.repeat(8)}</Tag>
      </Cell>
      <Cell skeleton="true">000 txns</Cell>
      <Cell skeleton="true">💰 ➡️ 0x{'0'.repeat(40)}</Cell>
    </>
  );
};

export default LatestBlockSkeleton;
