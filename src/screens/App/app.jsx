import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Header from '../../components/Header/header';
import SearchInput from '../../components/SearchInput/searchInput';
import Accordion from '../../components/Accordion/accordion';
import LoadButton from '../../components/Load/loadButton';

import './app.css';

import { allFarmsData } from '../../constats/tableData';

const App = () => {
  const [amount, setAmount] = useState(5);
  const [isFiltered, setIsFiltered] = useState(false);
  let count = 0;

  const [searchText, setSearchText] = useState('');

  const farmsFiltered = searchText === ""
    ? allFarmsData
    : allFarmsData.filter((farm) => farm.name.toLowerCase().includes(searchText));

  return (
    <div className="app">
      <Header />

      <SearchInput
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <div className="headerWrapper">
        {farmsFiltered?.map((value) => {
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

      {amount !== farmsFiltered.length && (
        <LoadButton
          length={farmsFiltered.length}
          amount={amount}
          setAmount={setAmount}
        />
      )}
    </div>
  );
};

export default App;
