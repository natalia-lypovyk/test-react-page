import React from 'react';
import { v4 as uuid } from 'uuid';

import JetHash from '../../assets/svg/jetHash';
import './header.css'

import HeaderItem from './HeaderItem/headerItem';

const rates = [
  ['etchash', '374.8Mh'],
  ['kaspa', '86.2Mh']
];

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerImage">
          <JetHash />
        </div>

        <div className="headerTextContainer">
          <h1 className="headerTextWrapper">Farm Monitoring</h1>
        </div>
      </div>

      <div className="headerItems">
        {rates.map(([key, value]) => (
          <HeaderItem
            key={uuid()}
            headerText={key}
            bodyText={value}
          />
        ))}
      </div>

      <div className="underline" />
    </div>
  );
};

export default Header;
