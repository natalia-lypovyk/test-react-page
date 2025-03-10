import React, { useEffect, useState } from 'react';

import { Dropdown } from '../Dropdown/dropdown';
import { useAuth } from '../../context/auth.context';
import { useNotification } from '../../context/notification.context';
import {
  configsUrl,
  getData,
  removeConfig
} from '../../utils/get-data';

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
      .catch((error) => console.error(error));
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

      {configs.length > 0 ? (
        <Dropdown
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          configs={configs}
        />
      ) : (
        <p>Found no configs to update</p>
      )}

      <button
        className="modal__button"
        type="button"
        onClick={() => handleRemove()}
      >
        Delete
      </button>
    </>
  );
};
