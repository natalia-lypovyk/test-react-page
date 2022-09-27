import React from 'react';

import './accordion.css'
import GreenRec from '../../assets/svg/greenRec';
import RedRec from '../../assets/svg/redRec';

import { tableHeaderText } from '../../constats/tableData';

const ContentRow = ({ type = '', rowText= {} }) => {
  const isHeader = type === 'header';

  const getText =  (style = '', text = '') => (
    <span className={`${!isHeader ? 'accordionText' : 'accordionMainText'} ${style}`}>
      {text}
    </span>
  );

  return (
    <div className="innerContainer">
      <div  style={{width:'18%', display:'flex'}}>
        {!isHeader && (
          <div className="iconContainer">
            {rowText?.status? <GreenRec /> : <RedRec />}
          </div>)
        }

        {getText('',isHeader? tableHeaderText.name : rowText.name)}
      </div>

      <div style={{width:'10%'}}>
        {getText('',isHeader ? tableHeaderText.last : rowText.last)}
      </div>

      <div style={{width:'7%'}}>
        {getText('',isHeader ? tableHeaderText.algo : rowText.algo)}
      </div>

      <div style={{width:'5%'}}>
        {getText('',isHeader ? tableHeaderText.coin : rowText.coin)}
      </div>

      <div style={{width:'16%'}}>
        {getText('',isHeader ? tableHeaderText.pool : rowText.pool)}
      </div>

      <div style={{width:'10%'}}>
        {getText('',isHeader ? tableHeaderText.login : rowText.login)}
      </div>

      <div style={{width:'11%'}}>
        {getText(
          !rowText?.status && !isHeader && 'redText',
          isHeader ? tableHeaderText.troubles : rowText.troubles
        )}
      </div>

      <div style={{width:'12%'}}>
        {getText('',isHeader ? tableHeaderText.hashrate : rowText.hashrate)}
      </div>

      <div style={{width:'9%'}}>
        {getText('',isHeader ? tableHeaderText.conf_name : rowText.conf_name)}
      </div>
    </div>
  );
};

export default  ContentRow;
