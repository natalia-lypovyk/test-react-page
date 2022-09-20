import React from 'react';

import './headerItem.css'

const HeaderItem = ({ headerText, bodyText }) => {
  return (
    <div className={'headerItemContainer'}>
      <span className={'itemHeaderText'}>{headerText}</span>

      <span className={'itemHeaderText itemBodyText'}>{bodyText}</span>
    </div>
  );
};

export default  HeaderItem;
