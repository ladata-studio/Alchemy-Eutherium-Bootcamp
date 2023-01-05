import React, { useContext, useEffect, useState } from 'react';
import { AlchemyContext } from '../../App';
import truncateString from '../../utils/truncateString';
import { Link as RouterLink } from 'react-router-dom';
import { Cell, Link, Tag } from './tableStyles';
import LatestBlockSkeleton from './LatestBlockSkeleton';

const LatestBlock = ({ blockNum }) => {
  const [block, setBlock] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const alchemy = useContext(AlchemyContext);

  useEffect(() => {
    async function getBlock() {
      setIsLoading(true);
      const blockData = await alchemy.core.getBlock(blockNum);
      setBlock(blockData);
      setIsLoading(false);
    }

    getBlock();
  }, [blockNum, alchemy]);

  return (
    <>
      {isLoading ? (
        <LatestBlockSkeleton />
      ) : (
        <>
          <Cell>
            <RouterLink to={`/${block.number}`}>
              <Tag>{block.number}</Tag>
            </RouterLink>
          </Cell>
          <Cell>
            <Link to={`/${block.number}/transactions`}>
              {block.transactions.length} txns
            </Link>
          </Cell>
          <Cell>
            💰 ➡️{' '}
            <Link to={`/account/${block.miner}`}>
              {truncateString(block.miner, 42)}
            </Link>
          </Cell>
        </>
      )}
    </>
  );
};

export default LatestBlock;
