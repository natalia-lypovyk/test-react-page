import React, {
  useEffect,
  useState
} from 'react';
import { v4 as uuid } from 'uuid';

import Header from '../../components/Header/header';
import SearchInput from '../../components/SearchInput/searchInput';
import Accordion from '../../components/Accordion/accordion';
import LoadButton from '../../components/Load/loadButton';

import './app.css';
import {
  getData,
  allFarmsUrl,
  farmsBySearchUrl
} from '../../utils/get-data';

const App = () => {
  const [amount, setAmount] = useState(5);
  const [isFiltered, setIsFiltered] = useState(false);
  const limitForAllFarms = '?limit=100';
  const limitForSearch = '?limit=10';
  const farmsWithProblemsParam = '&only_with_problems=true';
  let count = 0;

  const [farms, setFarms] = useState([]);
  const [farmsWithProblems, setFWP] = useState([]);
  const [searchedFarms, setSearchedFarms] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    try {
      getData(`${allFarmsUrl}${limitForAllFarms}`).then(({ data }) => setFarms(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      getData(`${allFarmsUrl}${limitForAllFarms}${farmsWithProblemsParam}`).then(({ data }) => setFWP(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log('len', farms.length, 'pr len', farmsWithProblems.length);
  const handleSearch = (event) => {
    event.preventDefault();
    getData(`${farmsBySearchUrl}${limitForSearch}&search_query=${searchText}`)
      .then(({ data }) => setSearchedFarms(data))
  }

  const farmsFiltered = searchText === "" ? farms : searchedFarms;

  return (
    <div className="app">
      <Header />

      <form onSubmit={handleSearch}>
        <SearchInput
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </form>

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

      {amount <= farmsFiltered.length && (
        <LoadButton
          // length={farmsFiltered.length}
          amount={amount}
          setAmount={setAmount}
        />
      )}
    </div>
  );
};

export default App;
