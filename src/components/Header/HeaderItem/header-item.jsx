import React from 'react';

import './header-item.css'

export const HeaderItem = ({ headerText, bodyText }) => {
  return (
    <div className="header__item-container">
      <span className="header__text header__text-bold">{headerText}</span>

      <span className="header__text header__text_body">{bodyText}</span>
    </div>
  );
};
