import React, { useCallback } from 'react';

import './load-button.css'
import { Replay } from '../../assets/svg';

export const LoadButton = ({ amount, setAmount }) => {
  const extraAmount = 10;
  const loadText = 'Load more'

  const toggle = useCallback(() => {
    setAmount(amount + extraAmount);
  }, [amount, extraAmount]);

  return (
    <div
      className="load-button max-content"
      onClick={() => toggle()}
    >
      <Replay />
      <span className="load-button__text">{loadText}</span>
    </div>
  );
};
