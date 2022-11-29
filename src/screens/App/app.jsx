import React, { useEffect, useState, memo } from 'react';
import { v4 as uuid } from 'uuid';
import { Navigate } from 'react-router-dom';

import './app.css';
import { Header } from '../../components/Header/header';
import { SearchInput } from '../../components/SearchInput/search-input';
import Accordion from '../../components/Accordion/accordion';
import { LoadButton } from '../../components/Load/load-button';
import { Modal } from '../../components/modal/modal';
import { ConfigForm } from '../../components/ConfigForm/config-form';
import { useAuth } from '../../context/auth.context';
import {
  getData,
  allFarmsUrl,
  farmsBySearchUrl,
  limitForAllFarms,
  limitForSearch,
  farmsWithProblemsParam,
  configsUrl, queryFilter
} from '../../utils/get-data';

const App = () => {
  const token = sessionStorage.getItem('access_token');
  const {
    shouldUpdateFarms,
    toggleUpdate,
    setConfigsToContext
  } = useAuth();
  const [amount, setAmount] = useState(5);
  const [isFiltered, setFiltered] = useState(false);
  const [isFilteredOffline, setFilteredOffline] = useState(false);

  let count = 0;

  const [farms, setFarms] = useState([]);
  const [farmsWithProblems, setFWP] = useState([]);
  const [searchedFarms, setSearchedFarms] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [farmsAmount, setFarmsAmount] = useState();

  const [isOpenConfigModal, setOpenConfigModal] = useState(false);

  useEffect(() => {
    getData(`${allFarmsUrl}${limitForAllFarms}`)
      .then(({ data, max_size }) => {
        setFarms(data);
        setFarmsAmount(max_size);
      })
      .catch((error) => console.error(error));

    return () => toggleUpdate();
  }, [shouldUpdateFarms]);

  useEffect(() => {
    getData(`${allFarmsUrl}${limitForAllFarms}${farmsWithProblemsParam}`)
      .then(({ data }) => setFWP(data))
      .catch((error) => console.error(error));
  }, []);

  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    getData(configsUrl).then((data) => {
      if (data) {
        setConfigsToContext(data)
        setConfigs(data)
      }

    });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    getData(`${farmsBySearchUrl}${searchText}${limitForSearch}`)
      .then(({ data }) => setSearchedFarms(data));
  }

  const handleFilter = (event) => {
    event.preventDefault();

    getData(`${farmsBySearchUrl}${searchText}${limitForSearch}${queryFilter}${isFilteredOffline}`)
      .then(({ data }) => setSearchedFarms(data));
  }

  const farmsFiltered =
    isFiltered
      ? farmsWithProblems
      : searchText === ""
        ? farms
        : searchedFarms;

  return token ? (
    <div className="app">
      <Header />

      <div className="app_buttons max-content">
        <button
          className="app_button"
          type="button"
          onClick={() => setOpenConfigModal(!isOpenConfigModal)}
        >
          Config
        </button>
      </div>

      <Modal
        isOpen={isOpenConfigModal}
        handleClose={() => setOpenConfigModal(false)}
        wrapperId="config-modal-root"
      >
        <ConfigForm setModalOpen={setOpenConfigModal} />
      </Modal>

      <form onSubmit={handleSearch}>
        <SearchInput
          isFiltered={isFiltered}
          setFiltered={setFiltered}
          isFilteredOffline={isFilteredOffline}
          setFilteredOffline={setFilteredOffline}
          filterOffline={handleFilter}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </form>

      <div className="app__header-wrapper">
        {farmsFiltered?.map((value) => {
          if (count <= amount) {
            count++;
            return (
              <Accordion
                data={value}
                key={uuid()}
                configs={configs}
              />
            )
          }
        })}
      </div>

      {amount < farmsFiltered.length ? (
        <LoadButton
          amount={amount}
          setAmount={setAmount}
        />
      ) : null}
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default memo(App);
