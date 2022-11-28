import { useEffect, useState } from 'react';

import { Dropdown } from '../Dropdown/dropdown';
import UpdateForm from './update-form';

import { getData, configsUrl } from '../../utils/get-data';

export const UpdateTab = ({ setModalOpen }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    getData(configsUrl)
      .then((data) => {
        if (data) setConfigs(data);
      })
      .catch((error) => console.error(error));
  }, []);

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

      {selectedValue ? (
        <UpdateForm
          selectedValue={selectedValue}
          setModalOpen={setModalOpen}
        />
      ) : null}
    </>
  );
};
