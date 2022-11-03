import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Header } from '../../components/Header/header';
import { SearchInput } from '../../components/SearchInput/search-input';
import { Accordion } from '../../components/Accordion/accordion';
import { LoadButton } from '../../components/Load/load-button';
import { Modal } from '../../components/modal/modal';

import './app.css';
import {
  allFarmsUrl,
  farmsBySearchUrl,
  getData,
  addIpToWhitelist,
  removeIpFromWhitelist,
  limitForAllFarms,
  limitForSearch,
  farmsWithProblemsParam,
  allWhiteIps
} from '../../utils/get-data';
import { ConfigForm } from '../../components/ConfigForm/config-form';

const App = () => {
  const [amount, setAmount] = useState(5);
  const [isFiltered, setIsFiltered] = useState(false);

  let count = 0;

  const [farms, setFarms] = useState([]);
  const [farmsWithProblems, setFWP] = useState([]);
  const [searchedFarms, setSearchedFarms] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [farmsAmount, setFarmsAmount] = useState();
  const [ips, setIps] = useState([]);

  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenConfigModal, setIsOpenConfigModal] = useState(false);

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

  useEffect(() => {
    getData(allWhiteIps).then(({ data }) => setIps(data));
  }, [])
  console.log('farms', farms);
  const handleSearch = (event) => {
    event.preventDefault();

    getData(`${farmsBySearchUrl}${searchText}${limitForSearch}`)
      .then(({ data }) => setSearchedFarms(data));
  }

  const farmsFiltered =
    isFiltered
      ? farmsWithProblems
      : searchText === ""
        ? farms
        : searchedFarms;

  const buttons = [
    {
      title: 'Add IP',
      handler: setIsOpenAddModal
    },
    {
      title: 'Delete IP',
      handler: setIsOpenDeleteModal
    }
  ];

  const [ipToAdd, setIpToAdd] = useState('');
  const [ipToDelete, setIpToDelete] = useState('');

  return (
    <div className="app">
      <Header />

      <div className="app_buttons max-content">
        {buttons.map(({ title, handler}) => (
          <button
            key={title}
            type="button"
            className="app_button"
            onClick={() => handler(true)}
          >
            {title}
          </button>
        ))}

        <button
          className="app_button"
          type="button"
          onClick={() => setIsOpenConfigModal(!isOpenConfigModal)}
        >
          Config
        </button>
      </div>

      <Modal
        isOpen={isOpenConfigModal}
        handleClose={() => setIsOpenConfigModal(false)}
        wrapperId="config-modal-root"
      >
        <ConfigForm />
      </Modal>

      <Modal
        isOpen={isOpenAddModal}
        handleClose={() => setIsOpenAddModal(false)}
        wrapperId="add-id-root"
      >
        <p>Enter IP you want to add to whitelist</p>
        <input
          className="modal__input margin-bottom-20"
          value={ipToAdd}
          onChange={(e) => setIpToAdd(e.target.value)}
          placeholder="79.110.130.237"
        />
        <button
          className="modal__button"
          type="button"
          onClick={() => {
            addIpToWhitelist(ipToAdd);
            setIsOpenAddModal(false);
          }}
        >
          Add
        </button>
      </Modal>

      <Modal
        isOpen={isOpenDeleteModal}
        handleClose={() => setIsOpenDeleteModal(false)}
        wrapperId="delete-id-root"
      >
        <p>Enter IP you want to delete from whitelist</p>
        <input
          className="modal__input margin-bottom-20"
          value={ipToDelete}
          onChange={(e) => setIpToDelete(e.target.value)}
          placeholder="79.110.130.237"
        />
        <button
          className="modal__button"
          type="button"
          onClick={() => {
            removeIpFromWhitelist(ipToDelete);
            setIsOpenDeleteModal(false);
          }}
        >
          Delete
        </button>
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
  );
};

export default App;
