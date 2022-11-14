import React from 'react';

import { Minus } from '../../assets/svg';

export const Field = ({ index, register, remove }) => {
  return (
    <label className="modal__label">
      <input
        {...register(`config.wallets.${index}[0]`)}
        className="modal__input flex-basis-20"
        type="text"
        autoComplete="off"
      />

      <input
        {...register(`config.wallets.${index}[1]`)}
        className="modal__input flex-basis-80"
        type="text"
        autoComplete="off"
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
