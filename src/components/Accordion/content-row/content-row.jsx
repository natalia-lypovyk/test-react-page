import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import '../accordion.css';
import {
  GreenRec,
  RedRec
} from '../../../assets/svg';

import { Switch } from '../switch/switch';
import { Modal } from '../../modal/modal';

import { changeRigScriptStatus } from '../../../utils/get-data';
import { getText } from '../../../utils/get-text';

import { tableHeaderText } from '../../../constats/tableData';

export const ContentRow = ({ type = '', rowText }) => {
  const isHeader = type === 'header';
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [value, setValue] = useState(rowText?.script_status);

  const switchRigStatus = async (rigId) => {
    setValue(!value);

    return await fetch(
      changeRigScriptStatus,
      {
        method: 'POST',
        body: JSON.stringify({ 'rig_id': rigId }),
      },
    ).then(res => res.json());
  };

  return (
    <div className="inner-container">
      <div style={{ display: 'flex' }}>
        {!isHeader && (
          <figure className="icon-container">
            {rowText?.active ? <GreenRec /> : <RedRec />}
          </figure>)
        }
        {getText(
          '',
          isHeader? 'Rig Name' : rowText.name,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.lastRequest : new Date(rowText.lastRequest),
          isHeader,
          false,
          true
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.algorithms : rowText.algorithms,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.coins : rowText.coins,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.pools : rowText.pools,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.logins : rowText.logins,
          isHeader
        )}
      </div>

      <div>
        {getText(
          !rowText?.status && !isHeader && 'red-text',
          isHeader ? tableHeaderText.trouble : rowText.trouble,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.hashrates : rowText.hashrates,
          isHeader,
          true
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.configName : rowText.configName,
          isHeader
        )}
      </div>

      <div>
        {!isHeader && (
          <Switch
            id={uuid()}
            isOn={value}
            onClick={() => setIsOpenModal(true)}
            handleToggle={() => setIsOpenModal(true)}
          />
        )}
      </div>

      <Modal
        isOpen={isOpenModal}
        handleClose={() => setIsOpenModal(false)}
        wrapperId="settings-modal-root"
      >
        <p>Are you sure to change rig status?</p>

        <div className="modal__buttons">
          <button
            className="confirm-button"
            type="button"
            onClick={() => {
              switchRigStatus(rowText.rig_id);
              setIsOpenModal(false);
            }}
          >
            Yes, sure
          </button>

          <button
            className="confirm-button"
            type="button"
            onClick={() => setIsOpenModal(false)}
          >
            No
          </button>
        </div>
      </Modal>
    </div>
  );
};
