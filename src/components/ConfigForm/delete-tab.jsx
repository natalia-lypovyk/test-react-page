import React, { useEffect, useState } from 'react';

import { Dropdown } from '../Dropdown/dropdown';
import { useAuth } from '../../context/auth.context';
import {
  configsUrl,
  getData,
  removeConfig
} from '../../utils/get-data';
import { useNotification } from '../../context/notification.context';

export const DeleteTab = ({ setModalOpen }) => {
  const { setShouldUpdateConfigs } = useAuth();
  const { showNotification } = useNotification();
  const [selectedValue, setSelectedValue] = useState('');
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    getData(configsUrl)
      .then((data) => {
        if (data) setConfigs(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleRemove = () => {
    removeConfig(selectedValue.id);
    setShouldUpdateConfigs(true);
    showNotification('Config successfully removed');
    setModalOpen(false);
  }

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
        onClick={handleRemove}
      >
        Delete
      </button>
    </>
  );
};
