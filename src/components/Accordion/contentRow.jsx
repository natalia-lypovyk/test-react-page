import React from 'react';

import './accordion.css'
import GreenRec from '../../assets/svg/greenRec';
import RedRec from '../../assets/svg/redRec';

import { tableHeaderText } from '../../constats/tableData';

const ContentRow = ({ type = '', rowText= {} }) => {
  const isHeader = type === 'header';

  const getText =  (style = '', text = '') => (
    <span className={`accordionMainText fontSize12 ${!isHeader&&'fontWeight400'} ${style}`}>
      {text}
    </span>
  );

  return (
    <>
      <div className={'marginLeft10'} style={{width:'18%', display:'flex'}}>
        {!isHeader && (
          <div className={'iconContainer'}>
            {rowText?.status? <GreenRec /> : <RedRec />}
          </div>)
        }

        {getText('',isHeader? tableHeaderText.name : rowText.name)}
      </div>

      <div className={'marginLeft20'}  style={{width:'10%'}}>
        {getText('',isHeader ? tableHeaderText.last : rowText.last)}
      </div>

      <div className={'marginLeft20'} style={{width:'7%'}}>
        {getText('',isHeader ? tableHeaderText.algo : rowText.algo)}
      </div>

      <div className={'marginLeft20'} style={{width:'5%'}}>
        {getText('',isHeader ? tableHeaderText.coin : rowText.coin)}
      </div>

      <div className={'marginLeft20'} style={{width:'16%'}}>
        {getText('',isHeader ? tableHeaderText.pool : rowText.pool)}
      </div>

      <div className={'marginLeft20'} style={{width:'10%'}}>
        {getText('',isHeader ? tableHeaderText.login : rowText.login)}
      </div>

      <div className={'marginLeft20'} style={{width:'11%'}}>
        {getText(
          !rowText?.status && !isHeader && 'redText',
          isHeader ? tableHeaderText.troubles : rowText.troubles
        )}
      </div>

      <div className={'marginLeft20'} style={{width:'12%'}}>
        {getText('',isHeader ? tableHeaderText.hashrate : rowText.hashrate)}
      </div>

      <div className={'marginLeft20 marginRight10'} style={{width:'9%'}}>
        {getText('',isHeader ? tableHeaderText.conf_name : rowText.conf_name)}
      </div>
    </>
  );
};

export default  ContentRow;
