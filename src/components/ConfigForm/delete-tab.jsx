import React, { useEffect, useState } from 'react';

import { Dropdown } from '../Dropdown/dropdown';
import { useAuth } from '../../context/auth.context';
import {
  configsUrl,
  getData,
  removeConfig
} from '../../utils/get-data';

export const DeleteTab = () => {
  const { setShouldUpdate } = useAuth();
  const [selectedValue, setSelectedValue] = useState('');
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    getData(configsUrl)
      .then((data) => {
        if (data) setConfigs(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <p>Choose config to update</p>

      <Dropdown
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        configs={configs}
      />

      <button
        className="modal__button"
        type="button"
        onClick={() => {
          removeConfig(selectedValue.id);
          setShouldUpdate(true);
        }}
      >
        Delete
      </button>
    </>
  );
};
