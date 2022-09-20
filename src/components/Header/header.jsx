import React from 'react';
import { v4 as uuid } from 'uuid';

import JetHash from '../../assets/svg/jetHash';
import './header.css'

import HeaderItem from './HeaderItem/headerItem';

const headerItems = [
  { headerText: 'etchash', bodyText: '13.5 Gh' },
  { headerText: 'etchash', bodyText: '192.3 Gh' },
  { headerText: 'firopow', bodyText: '243.4 Mh' },
  { headerText: 'kaspa', bodyText: '492.5 Mh' },
  { headerText: 'x17', bodyText: '195.6 Mh' },
  { headerText: 'sha256', bodyText: '17.8 Th' },
  { headerText: 'autolykos2', bodyText: '234.4 Mh' }
];

const Header = () => {
  return (
    <div className={'app'} >
      <div className={'headerContainer'}>
        <div className='headerImage'>
          <JetHash />
        </div>

        <div className='headerTextContainer'>
          <h1 className='headerTextWrapper'>Farm Monitoring</h1>
        </div>
      </div>

      <div className={'headerItems'}>
        {headerItems.map((value) => (
          <HeaderItem
            key={uuid()}
            headerText={value.headerText}
            bodyText={value.bodyText}
          />
        ))}
      </div>

      <div className={'underline'} />
    </div>
  );
};

export default Header;
