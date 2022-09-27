import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Header from '../../components/Header/header';
import SearchInput from '../../components/SearchInput/searchInput';
import Accordion from '../../components/Accordion/accordion';
import LoadButton from '../../components/Load/loadButton';

import './app.css';
import { accordionData, cutLogin } from '../../constats/tableData';

const App = () => {
  const [amount, setAmount] = useState(5);
  const [isFiltered, setIsFiltered] = useState(false);
  let count = 0;

  const ttext = cutLogin('0xcdd47e77F642690E50d929641F0f78E3414e0D7E');
  console.log('text', ttext, ttext.length);
  const data = !isFiltered ? accordionData : accordionData.filter((item) => item.status === false);

  return (
    <div className="app">
      <Header />

      <SearchInput isFiltered={isFiltered} setIsFiltered={setIsFiltered} />

      <div className="headerWrapper">
        {data.map((value) => {
          if (count <= amount) {
            count++;
            return (
              <Accordion
                data={value}
                key={uuid()}
              />
            )
          }
        })}
      </div>

      {amount !== data.length && (
        <LoadButton
          length={data.length}
          amount={amount}
          setAmount={setAmount}
        />
      )}
    </div>
  );
};

export default  App;
