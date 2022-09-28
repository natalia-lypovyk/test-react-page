import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import '../accordion.css'
import GreenRec from '../../../assets/svg/greenRec';
import RedRec from '../../../assets/svg/redRec';
import { Gear } from '../../../assets/svg/gear';

import { Switch } from '../switch/switch';

import { tableHeaderText } from '../../../constats/tableData';

const ContentRow = ({ type = '', rowText= {} }) => {
  const isHeader = type === 'header';
  const [value, setValue] = useState(false);

  const getText =  (style = '', text = '') => (
    <span className={`${!isHeader ? 'accordionText' : 'accordionTextBold'} ${style}`}>
      {text}
    </span>
  );

  console.log(rowText)
  return (
    <div className="innerContainer">
      <div style={{ display: 'flex' }}>
        {!isHeader && (
          <figure className="iconContainer">
            {rowText?.status ? <GreenRec /> : <RedRec />}
          </figure>)
        }
        {getText('',isHeader? tableHeaderText.name : rowText.name)}
      </div>

      <div>
        {getText('',isHeader ? tableHeaderText.last : rowText.last)}
      </div>

      <div>
        {getText('',isHeader ? tableHeaderText.algo : rowText.algo)}
      </div>

      <div>
        {getText('',isHeader ? tableHeaderText.coin : rowText.coin)}
      </div>

      <div>
        {getText('',isHeader ? tableHeaderText.pool : rowText.pool)}
      </div>

      <div>
        {getText('',isHeader ? tableHeaderText.login : rowText.login)}
      </div>

      <div>
        {getText(
          !rowText?.status && !isHeader && 'redText',
          isHeader ? tableHeaderText.troubles : rowText.troubles
        )}
      </div>

      <div>
        {getText('',isHeader ? tableHeaderText.hashrate : rowText.hashrate)}
      </div>

      <div>
        {getText('',isHeader ? tableHeaderText.conf_name : rowText.conf_name)}
      </div>

      <div className="container">
        <button type="button">
          <Gear />
        </button>
      </div>

      <div>
        <Switch
          id={uuid()}
          isOn={value}
          handleToggle={() => setValue(!value)}
        />
      </div>
    </div>
  );
};

export default ContentRow;
