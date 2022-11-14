import { useEffect, useState } from 'react';

import { Dropdown } from '../Dropdown/dropdown';
import { UpdateForm } from './update-form';

import { configsUrl, getData } from '../../utils/get-data';
import { useAuth } from '../../context/auth.context';

export const UpdateTab = () => {
  const { shouldUpdate } = useAuth();
  const [selectedValue, setSelectedValue] = useState('');
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    getData(configsUrl).then((data) => setConfigs(data));
  }, [shouldUpdate]);

  return (
    <>
      <p>Choose config to update</p>
      <Dropdown
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        configs={configs}
      />

      {selectedValue ? (
        <UpdateForm selectedValue={selectedValue} configs={configs} />
      ) : null}
    </>
  );
};
