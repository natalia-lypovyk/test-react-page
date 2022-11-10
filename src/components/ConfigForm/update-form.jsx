import { useForm, useFieldArray } from 'react-hook-form';
import React from 'react';

export const UpdateForm = ({ selectedValue, configs }) => {
  const { register, handleSubmit, control, getValues, setValue, reset } = useForm({
    defaultValues: {
      config: {
        name: selectedValue.name,
        percent: selectedValue.percent_from_24h,
        wallets: Object.entries(selectedValue.wallets)
      }
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'config.wallets'
  });

  const onSubmit = (data) => {
    // e.preventDefault();

    // const configData = {
    //   name: configName,
    //   id: config.farm_id,
    //   percent_from_24h: configPercent,
    //   wallets: configWallets


    console.log('config to send', data);
    // setConfig(configData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="modal__label">
        <span className="accordion__main-text">Name:</span>
        <input
          {...register('config.name')}
          className="modal__input_tr"
          type="text"
        />
      </label>

      <label className="modal__label">
        <span className="accordion__main-text">Percent:</span>
        <input
          {...register('config.percent')}
          className="modal__input_tr"
          type="text"
        />
      </label>

      <p className="modal__title">Wallets</p>

      {fields.map((field, index) => (
        <label
          key={field.id}
          className="modal__label"
        >
          <input
            {...register(`config.wallets.${index}[0]`)}
            className="modal__input flex-basis-20"
            type="text"
          />

          <input
            {...register(`config.wallets.${index}[1]`)}
            className="modal__input flex-basis-80"
            type="text"
          />
        </label>
      ))}

      <div className="modal__buttons">
        <button
          className="modal__button"
          type="button"
          onClick={() => append({
            config: {
              name: '',
              percent: '',
              wallets: {}
            }
          })}
        >
          Add wallet
        </button>

        <button
          className="modal__button"
          type="button"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>

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
          onClick={() => console.log('should delete?')}
        >
          Delete
        </button>
      </div>
    </form>
  );
};
