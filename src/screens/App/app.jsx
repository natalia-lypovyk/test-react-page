import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Navigate, useNavigate } from 'react-router-dom';

import './app.css';
import { Header } from '../../components/Header/header';
import { SearchInput } from '../../components/SearchInput/search-input';
import { Accordion } from '../../components/Accordion/accordion';
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
  farmsWithProblemsParam, configsUrl, checkToken, handleRefreshToken
} from '../../utils/get-data';

const App = () => {
  const { isAuthenticated } = useAuth();
  const [amount, setAmount] = useState(5);
  const [isFiltered, setIsFiltered] = useState(false);

  let count = 0;

  const [farms, setFarms] = useState([]);
  const [farmsWithProblems, setFWP] = useState([]);
  const [searchedFarms, setSearchedFarms] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [farmsAmount, setFarmsAmount] = useState();

  const [isOpenConfigModal, setIsOpenConfigModal] = useState(false);

  const [configs, setConfigs] = useState([]);
  useEffect(() => {
    getData(configsUrl).then((data) => setConfigs(data));
  }, []);

// console.log('conf', configs)
  useEffect(() => {
    try {
      getData(`${allFarmsUrl}${limitForAllFarms}`).then(({ data, max_size }) => {
        setFarms(data);
        setFarmsAmount(max_size);
      });
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

  const handleSearch = (event) => {
    event.preventDefault();

    getData(`${farmsBySearchUrl}${searchText}${limitForSearch}`)
      .then(({ data }) => setSearchedFarms(data));
  }
  const navigate = useNavigate();

  const refreshToken = async () => {
    const token = checkToken();
    console.log('refr', token)

    if (token === 'refresh') {
      const data = await handleRefreshToken();
      if (data?.token) {
        sessionStorage.setItem('access_token', data?.token);
      }
    }

    if (token === 'expired') {
      navigate('/login');
    }
  }

  const farmsFiltered =
    isFiltered
      ? farmsWithProblems
      : searchText === ""
        ? farms
        : searchedFarms;

  return isAuthenticated ? (
    <div className="app">
      <Header />

      <div className="app_buttons max-content">
        <button
          className="app_button"
          type="button"
          onClick={() => setIsOpenConfigModal(!isOpenConfigModal)}
        >
          Config
        </button>

        <button
          className="app_button"
          type="button"
          onClick={() => refreshToken()}
        >
          refresh
        </button>
      </div>

      <Modal
        isOpen={isOpenConfigModal}
        handleClose={() => setIsOpenConfigModal(false)}
        wrapperId="config-modal-root"
      >
        <ConfigForm />
      </Modal>

      <form onSubmit={handleSearch}>
        <SearchInput
          isFiltered={isFiltered}
          setIsFiltered={setIsFiltered}
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
              />
            )
          }
        })}
      </div>

      {amount < farmsFiltered.length && (
        <LoadButton
          amount={amount}
          setAmount={setAmount}
        />
      )}
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default App;
