import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './accordion.css'
import {
  Plus,
  Minus,
  Warning,
  Gear
} from '../../assets/svg';
import { ContentRow } from './content-row/content-row';
import { Tooltip } from './tooltip/tooltip';
import { Modal } from '../modal/modal';
import { setConfig } from '../../utils/get-data';

export const Accordion = ({ data, config }) => {
  console.log(data)
  const [isSelected, setIsSelected] = useState(false);
  const totalFarmHashrates = 'Total farm hashrates:';
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [configName, setConfigName] = useState(config?.name);
  const [configPercent, setConfigPercent] = useState(config?.percent_from_24h);
  const [configWallets, setConfigWallets] = useState(config?.wallets);

  const toggle = () => {
    setIsSelected(!isSelected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configData = {
      name: configName,
      id: config.farm_id,
      percent_from_24h: configPercent,
      wallets: configWallets
    }

    console.log('config to send', configData);
    setConfig(configData);
  }

  const handleDeleteConfig = (e) => {
    e.preventDefault();

    setConfig(null);
  };

  return (
    <div className="accordion max-content">
      <div className="accordion__header-container">
        <div className="accordion__header-wrapper">
          {/*{!data?.status && (*/}
          {/*  <>*/}
          {/*    <div className="warning-image">*/}
          {/*      <Warning />*/}
          {/*    </div>*/}

          {/*    <Tooltip />*/}
          {/*  </>*/}
          {/*)}*/}

          <span className="accordion__main-text margin-left-18">
            {data?.name}
          </span>
        </div>

        <div className="accordion__header-wrapper">
          <span className="accordion__text margin-left-10">
            {totalFarmHashrates}
          </span>

          {data?.total_hashrates?.map((value) => (
            <span
              className="accordion__main-text margin-left-10"
              key={uuid()}
            >
              {`[${value?.coinTag || value?.algorithm}] ${value?.hashrate}`}
            </span>
          ))}

          {config && (
            <>
              <span className="accordion__main-text margin-left-10">Conf_Name: </span>
              <span className="accordion__text">&nbsp;{config?.name}</span>
            </>
          )}

          <div className="container margin-left-10">
            <button type="button" onClick={() => setIsOpenModal(true)}>
              <Gear />
            </button>
          </div>

          <Modal
            isOpen={isOpenModal}
            handleClose={() => setIsOpenModal(false)}
            wrapperId="settings-modal-root"
          >
            <p className="modal__title">Config</p>

            <form onSubmit={handleSubmit}>
              <label className="modal__label">
                <span className="accordion__main-text">Name:</span>
                <input
                  className="modal__input_tr"
                  type="text"
                  value={configName}
                  onChange={(e) => setConfigName(e.target.value)}
                />
              </label>

              <label className="modal__label">
                <span className="accordion__main-text">Percent:</span>
                <input
                  className="modal__input_tr"
                  value={configPercent}
                  onChange={(e) => setConfigPercent(e.target.value)}
                />
              </label>

              <p className="modal__title">Wallets</p>
              {configWallets ? (Object.entries(configWallets)?.map((wallet) => (
                <label
                  key={wallet[0]}
                  className="modal__label"
                >
                  <span className="accordion__main-text">{wallet[0]}:</span>
                  <input
                    className="modal__input_tr"
                    type="text"
                    value={wallet[1]}
                    onChange={(e) =>
                      setConfigWallets((prev) => ({
                        ...prev,
                        [wallet[0]]: e.target.value
                      }))}
                  />
                </label>
              ))) : null}

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
                  onClick={handleDeleteConfig}
                >
                  Delete
                </button>
              </div>
            </form>
          </Modal>

          <div className="icon-image" onClick={() => toggle()}>
            {isSelected  ? <Minus /> : <Plus />}
          </div>
        </div>
      </div>

      {isSelected && (
        <div className="accordion__content-container">
          <div className="accordion__overflow">
            <div className="accordion__content-wrapper">
              <ContentRow type="header" />
            </div>

            {data?.rigs?.map((value) => (
              <div
                key={uuid()}
                className="accordion__content-wrapper"
              >
                <ContentRow rowText={value} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
