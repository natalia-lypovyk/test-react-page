import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import '../accordion.css'
import GreenRec from '../../../assets/svg/greenRec';
import RedRec from '../../../assets/svg/redRec';
import { Gear } from '../../../assets/svg/gear';

import { Switch } from '../switch/switch';

import { tableHeaderText } from '../../../constats/tableData';

import { changeRigScriptStatus } from '../../../utils/get-data';
import { getText } from '../../../utils/get-text';

const ContentRow = ({ type = '', rowText }) => {
  const isHeader = type === 'header';
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
    <div className="innerContainer">
      <div style={{ display: 'flex' }}>
        {!isHeader && (
          <figure className="iconContainer">
            {rowText?.active ? <GreenRec /> : <RedRec />}
          </figure>)
        }
        {getText(
          '',
          isHeader? tableHeaderText.name : rowText.name,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.last : new Date(rowText.lastRequest),
          isHeader,
          false,
          true
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.algo : rowText.algorithms,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.coin : rowText.coins,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.pool : rowText.pools,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.login : rowText.logins,
          isHeader
        )}
      </div>

      <div>
        {getText(
          !rowText?.status && !isHeader && 'redText',
          isHeader ? tableHeaderText.troubles : rowText.trouble,
          isHeader
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.hashrate : rowText.hashrates,
          isHeader,
          true
        )}
      </div>

      <div>
        {getText(
          '',
          isHeader ? tableHeaderText.conf_name : rowText.configName,
          isHeader
        )}
      </div>

      <div className="container">
        {!isHeader && (
          <button type="button">
            <Gear />
          </button>
        )}
      </div>

      <div>
        {!isHeader && (
          <Switch
            id={uuid()}
            isOn={value}
            handleToggle={() => switchRigStatus('rigId')}
          />
        )}
      </div>
    </div>
  );
};

export default ContentRow;
