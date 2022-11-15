import React, { useEffect, useMemo, useState } from 'react';
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
import { Dropdown } from '../Dropdown/dropdown';

import {
  getData,
  configsUrl,
  applyConfigToFarm
} from '../../utils/get-data';
import { useNotification } from '../../context/notification.context';
import { useAuth } from '../../context/auth.context';

export const Accordion = ({ data }) => {
  const { showNotification } = useNotification();
  const { shouldUpdateConfigs } = useAuth();
  const [isSelected, setIsSelected] = useState(false);
  const totalFarmHashrates = 'Total farm hashrates:';
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [configs, setConfigs] = useState([]);
  const [troubleText, setTroubleText] = useState('');

  useEffect(() => {
    getData(configsUrl)
      .then((data) => {
        if (data) setConfigs(data);
      })
      .catch((error) => console.error(error));
  }, [shouldUpdateConfigs]);

  const hasRigs = useMemo(() => data.rigs.length > 0, [data]);
  const toggle = () => {
    setIsSelected(!isSelected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const configName = useMemo(() => configs?.find((config) => config?.id === data?.config_id)?.name, [configs]);

  const hasTroubles = data?.rigs?.find((rig) => rig.trouble);

  useEffect(() => {
    if (hasTroubles) {
      setTroubleText(hasTroubles?.trouble)
    }
  }, [hasTroubles]);

  const handleApply = () => {
    applyConfigToFarm(data?.id, selectedValue.id);
    showNotification(`Config ${configName} successfully applied to ${data.name} farm`)
  }

  return (
    <div className="accordion max-content">
      <div className="accordion__header-container">
        <div className="accordion__header-wrapper">
          {hasTroubles && (
            <>
              <div className="warning-image">
                <Warning />
              </div>

              <Tooltip text={troubleText} />
            </>
          )}

          <span className="accordion__main-text margin-left-18">
            {data?.name}
          </span>
        </div>

        <div className="accordion__header-wrapper">
          {data?.total_hashrates?.length > 0 ? (
            <>
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
            </>
          ) : null}

          {data?.config_id ? (
            <>
              <span className="accordion__text margin-left-10">Conf_Name: </span>
              <span className="accordion__main-text">
                &nbsp;{configName}
              </span>
            </>
          ) : null}

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
            <p className="modal__title">Choose config</p>

            <form onSubmit={handleSubmit}>
              <Dropdown
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                configs={configs}
              />

              <button
                className="modal__button"
                disabled={selectedValue === ''}
                onClick={() => handleApply()}
              >
                Apply
              </button>
            </form>
          </Modal>

          <div
            className="icon-image"
            style={{ width: !hasRigs ? '24px' : 'auto'}}
            onClick={() => toggle()}
          >
            {hasRigs ? (isSelected  ? <Minus /> : <Plus />) : null}
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
