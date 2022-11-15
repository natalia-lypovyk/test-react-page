import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { NewWalletItem } from './new-wallet-item';
import { postConfig } from '../../utils/get-data';
import { useAuth } from '../../context/auth.context';
import { useNotification } from '../../context/notification.context';

export const AddTab = ({ setModalOpen }) => {
  const { setShouldUpdateConfigs } = useAuth();
  const { showNotification, setHasError } = useNotification();
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      wallets: [
        {
          walletName: '',
          walletValue: ''
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'wallets'
  });

  function handleResponse(response) {
    if (response.ok) {
      setHasError(false);
      showNotification('Config successfully added');
      setModalOpen(false);
      setShouldUpdateConfigs(true);
      return response.json();
    }

    if (!response.ok) {
      showNotification(response.statusText)
      setHasError(true);
      return Promise.reject(response);
    }
  }

  const onSubmit = async (data) => {
    const configData = {
      name: data.configName,
      percent_from_24h: Number(data.configPercent),
      wallets: data.wallets
        .reduce((prevWallets, wallet) => ({
          ...prevWallets,
          [wallet.walletName]: wallet.walletValue}
        ), {})
    }

    await postConfig(configData).then(handleResponse);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="config-form">
      <label className="modal__label">
        <span className="accordion__main-text flex-basis-20">
          Name:
        </span>

        <input
          {...register('configName')}
          className="modal__input flex-basis-80"
          type="text"
          autoComplete="off"
        />
      </label>

      <label className="modal__label">
        <span className="accordion__main-text flex-basis-20">
          Percent from&nbsp;24h:
        </span>

        <input
          {...register('configPercent')}
          className="modal__input flex-basis-80"
          type="number"
        />
      </label>

      <p className="modal__title">Wallets</p>

      {fields.map((field, index) => (
        <NewWalletItem
          key={field.id}
          register={register}
          index={index}
          field={field}
          remove={remove}
        />
      ))}

      <button
        type="button"
        className="modal__button margin-bottom-20"
        onClick={() => append({
          walletName: '',
          walletValue: ''
        })}>
        Add wallet
      </button>

      <div className="modal__buttons">
        <button
          className="modal__button"
          type="submit"
        >
          Add
        </button>

        <button
          className="modal__button"
          type="button"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </form>
  );
};
