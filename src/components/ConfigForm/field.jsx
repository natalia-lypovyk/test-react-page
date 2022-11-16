import React from 'react';

import { Minus } from '../../assets/svg';

export const Field = ({ index, register, remove }) => {
  return (
    <label className="modal__label" >
      <input
        {...register(`wallets.${index}.walletName`)}
        className="modal__input flex-basis-20"
        type="text"
      />

      <input
        {...register(`wallets.${index}.walletAddress`)}
        className="modal__input flex-basis-80"
        type="text"
      />

      <button
        className="wallet-item__button"
        type="button"
        onClick={() => remove(index)}
      >
        <Minus />
      </button>
    </label>
  );
};
