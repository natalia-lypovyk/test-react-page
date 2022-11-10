import { useEffect, useState } from 'react';

import { Dropdown } from '../Dropdown/dropdown';
import { UpdateForm } from './update-form';

import { configsUrl, getData } from '../../utils/get-data';

export const UpdateTab = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    getData(configsUrl).then((data) => setConfigs(data));
  }, []);

  // console.log('selected', selectedValue)

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
