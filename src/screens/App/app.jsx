import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Header from '../../components/Header/header';
import SearchInput from '../../components/SearchInput/searchInput';
import Accordion from '../../components/Accordion/accordion';
import LoadButton from '../../components/Load/loadButton';

import './app.css';
import { accordionData } from '../../constats/tableData';
import { getAllFarmsUrl, getData } from '../../utils/get-data';

const App = () => {
  const [amount, setAmount] = useState(5);
  const [isFiltered, setIsFiltered] = useState(false);
  const limit = 10;
  let count = 0;

  const [farms, setFarms] = useState([]);

  useEffect(() => {
    try {
      getData(`${getAllFarmsUrl}?limit=${limit}`).then(({ data }) => setFarms(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const dataFiltered = !isFiltered ? accordionData : accordionData.filter((item) => item.status === false);

  return (
    <div className="app">
      <Header />

      <SearchInput isFiltered={isFiltered} setIsFiltered={setIsFiltered} />

      <div className="headerWrapper">
        {farms?.map((value) => {
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

      {amount !== dataFiltered.length && (
        <LoadButton
          length={dataFiltered.length}
          amount={amount}
          setAmount={setAmount}
        />
      )}
    </div>
  );
};

export default App;
