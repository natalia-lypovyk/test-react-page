import { useEffect, useState } from 'react';

import { Dropdown } from '../Dropdown/dropdown';
import { UpdateForm } from './update-form';

import { configsUrl, getData } from '../../utils/get-data';
import { useAuth } from '../../context/auth.context';

export const UpdateTab = ({ setModalOpen }) => {
  const { setShouldUpdateConfigs } = useAuth();
  const [selectedValue, setSelectedValue] = useState('');
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    getData(configsUrl)
      .then((data) => {
        if (data) setConfigs(data);
      })
      .catch((error) => console.log(error));
  }, [setShouldUpdateConfigs]);

  return (
    <>
      <p>Choose config to update</p>
      <Dropdown
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        configs={configs}
      />

      {selectedValue ? (
        <UpdateForm
          selectedValue={selectedValue}
          configs={configs}
          setModalOpen={setModalOpen}
        />
      ) : null}
    </>
  );
};
