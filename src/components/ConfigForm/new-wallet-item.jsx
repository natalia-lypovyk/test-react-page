import React from 'react';

import './new-wallet-item.css';
import { Minus } from '../../assets/svg';

export const NewWalletItem = ({ register, index, field, remove }) => {
  return (
    <div className="wallet-item">
      <label className="modal__label">
        <span className="accordion__main-text">Coin:</span>

        <input
          {...register(`wallets[${index}].walletName`)}
          className="modal__input"
          type="text"
          defaultValue={field.walletName}
        />
      </label>

      <label className="modal__label">
        <span className="accordion__main-text">Address</span>

        <input
          {...register(`wallets[${index}].walletValue`)}
          className="modal__input"
          type="text"
          defaultValue={field.walletValue}
        />
      </label>

      <button
        className="wallet-item__button"
        type="button"
        onClick={() => remove(index)}
      >
        <Minus />
      </button>
    </div>
  );
};