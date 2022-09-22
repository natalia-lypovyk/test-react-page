import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Header from '../../components/Header/header';
import SearchInput from '../../components/SearchInput/searchInput';
import Accordion from '../../components/Accordion/accordion';
import LoadButton from '../../components/Load/loadButton';

import { accordionData } from '../../constats/tableData';

const App = () => {
  const [amount, setAmount] = useState(3);
  let count = 0;
  const [isFiltered, setIsFiltered] = useState(false);

  const data = !isFiltered ? accordionData : accordionData.filter((item) => item.status === false);

  console.log('count', count)
  return (
    <div className="app">
      <Header />

      <SearchInput isFiltered={isFiltered} setIsFiltered={setIsFiltered} />

      <div style={{
        marginTop:'40px',
        marginBottom: '10px'
        // marginBottom: amount === data.filter(value => value.status === filter).length && '100px'
      }}
      >
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
