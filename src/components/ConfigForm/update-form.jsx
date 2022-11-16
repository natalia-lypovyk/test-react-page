import React, { useEffect, useMemo } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Field } from './field';
import { updateConfig } from '../../utils/get-data';
import { useAuth } from '../../context/auth.context';
import { useNotification } from '../../context/notification.context';

const UpdateForm = ({ selectedValue, setModalOpen }) => {
  const { setShouldUpdateConfigs, setShouldUpdateFarms } = useAuth();
  const { setHasError, showNotification} = useNotification();
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: useMemo(() => ({
      name: selectedValue.name,
      percent: selectedValue.percent_from_24h,
      wallets: Object.entries(selectedValue.wallets)
        .reduce((prev, [name, address]) => ([
          ...prev,
          {
            walletName: name,
            walletAddress: address
          }]), [])
    }), [selectedValue])
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'wallets'
  });

  useEffect(() => {
    reset({
      name: selectedValue.name,
      percent: selectedValue.percent_from_24h,
      wallets: Object.entries(selectedValue.wallets)
        .reduce((prev, [name, address]) => ([
          ...prev,
          {
            walletName: name,
            walletAddress: address
          }]), [])
    })
  }, [reset, selectedValue])

  const handleResponse = (response) => {
    if (response.ok) {
      setHasError(false);
      showNotification('Config successfully updated');
      setModalOpen(false);
      setShouldUpdateConfigs(true);
      setShouldUpdateFarms(true);
      return response.json();
    }

    if (!response.ok) {
      showNotification(response.statusText)
      setHasError(true);
      return Promise.reject(response);
    }
  }

  const onSubmit = (data) => {
    const configData = {
      name: data.config.name,
      id: selectedValue.id,
      percent_from_24h: data.config.percent,
      wallets: data.config.wallets.reduce((prevWallet, [name, address]) => ({
        ...prevWallet,
        [name]: address
      }), {})
    }

    updateConfig(configData, selectedValue?.id).then(handleResponse);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="modal__label">
        <span className="accordion__main-text">Name:</span>
        <input
          {...register('name')}
          className="modal__input_tr"
          type="text"
          autoComplete="off"
        />
      </label>

      <label className="modal__label">
        <span className="accordion__main-text">Percent:</span>
        <input
          {...register('percent')}
          className="modal__input_tr"
          type="text"
          autoComplete="off"
        />
      </label>

      <p className="modal__title">Wallets</p>

      {fields.map((field, index) => (
        <Field key={field.id} index={index} register={register} remove={remove} />
      ))}

      <div className="modal__buttons">
        <button
          className="modal__button"
          type="button"
          onClick={() => append({
            name: '',
            percent: '',
            wallets: {}
          })}
        >
          Add wallet
        </button>

        <button
          className="modal__button"
          type="reset"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>

      <button
        className="modal__button"
        style={{ marginTop: '10px' }}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default UpdateForm;
