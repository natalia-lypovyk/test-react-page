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
  const [filter, setFilter] = useState(true);
  console.log('amount', amount, 'filter', filter, 'filtered', accordionData.filter(value => value.status === filter).length);

  return (
    <div className="app">
      <Header />

      <SearchInput filter={filter} setFilter={setFilter}/>

      <div style={{
        marginTop:'40px',
        marginBottom: amount === accordionData.filter(value => value.status === filter).length && '100px'
      }}
      >
        {accordionData.map((value) => {
          if (value.status === filter) {
            if (count <= amount) {
              count++;
              return (
                <Accordion
                  data={value}
                  key={uuid()}
                />
              )
            }
          }
        })}
      </div>

      {amount !== accordionData.filter(value => value.status === filter).length && (
        <LoadButton
          length={accordionData.length}
          amount={amount}
          setAmount={setAmount}
        />
      )}
    </div>
  );
};

export default  App;
