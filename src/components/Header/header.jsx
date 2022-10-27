import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import './header.css';
import { JetHash } from '../../assets/svg';

import { HeaderItem } from './HeaderItem/header-item';
import { getData, totalHashratesUrl } from '../../utils/get-data';

export const Header = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    try {
      getData(totalHashratesUrl).then((data) => setRates(Object.entries(data)));
    } catch (error) {
      console.error(error)
    }
  }, []);

  return (
    <div className="header">
      <div className="header__container max-content">
        <div className="header__image">
          <JetHash />
        </div>

        <div className="header__text-container">
          <h1 className="header__text-wrapper">Farm Monitoring</h1>
        </div>
      </div>

      <div className="header__items max-content">
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
