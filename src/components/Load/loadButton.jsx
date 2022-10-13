import React, { useCallback } from 'react';

import './loadButton.css'
import Replay from '../../assets/svg/replay';

const LoadButton = ({ length, amount, setAmount }) => {
  // console.log('length', length, 'amount', amount)
  const extraAmount = 5;
  const loadText = 'Load more'

  const toggle = useCallback(() => {
    setAmount(amount + extraAmount);
    // const sum = extraAmount + amount;
    // const difference = length - amount;
    //
    // if (sum < length) {
    //   setAmount(sum - 1);
    // }
    //
    // if (difference >= 0 ) {
    //   setAmount(length - 1);
    // }
  }, [amount, extraAmount]);

  return (
    <div
      className="loadButtonContainer"
      onClick={() => toggle()}
    >
      <Replay />
      <span className="loadText">{loadText}</span>
    </div>
  );
};

export default LoadButton;
