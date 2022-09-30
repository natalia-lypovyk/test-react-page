import React, {
  useEffect,
  useState
} from 'react';
import { v4 as uuid } from 'uuid';

import { getData, totalHashratesUrl } from '../../utils/get-data';
import JetHash from '../../assets/svg/jetHash';
import './header.css'

import HeaderItem from './HeaderItem/headerItem';

const Header = () => {
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
