import React, { useContext, useEffect, useState } from 'react';
import truncateString from '../../utils/truncateString';
import { Link as RouterLink } from 'react-router-dom';
import { Cell, Link, Tag } from './tableStyles';
import { AlchemyContext } from '../../App';
import LatestTransactionSkeleton from './LatestTransactionSkeleton';

const LatestTransaction = ({ txHash }) => {
  const [tx, setTx] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const alchemy = useContext(AlchemyContext);

  useEffect(() => {
    async function getBlock() {
      setIsLoading(true);
      const txData = await alchemy.core.getTransaction(txHash);
      setTx(txData);
      setIsLoading(false);
    }

    getBlock();
  }, [txHash, alchemy]);

  let eth = 0;
  if (tx) {
    eth = parseInt(tx.value._hex);
  }

  return (
    <>
      {isLoading ? (
        <LatestTransactionSkeleton />
      ) : (
        <>
          <Cell>
            <RouterLink to={`/transaction/${tx.hash}`}>
              <Tag>{truncateString(tx.hash, 14)}</Tag>
            </RouterLink>
          </Cell>
          <Cell>
            <Link to={`/account/${tx.from}`}>
              {truncateString(tx.from, 10)}
            </Link>
          </Cell>
          <Cell className="cell--centered">➡️</Cell>
          <Cell>{eth ? `💰 ${(eth / 1e18).toFixed(4)}` : 0} ETH</Cell>
          <Cell className="cell--centered">➡️</Cell>
          <Cell>
            <Link to={`/account/${tx.to}`}>{truncateString(tx.to, 10)}</Link>
          </Cell>
        </>
      )}
    </>
  );
};

export default LatestTransaction;
