import { Dropdown } from '../Dropdown/dropdown';
import { useState } from 'react';
import { UpdateForm } from './update-form';
import { useConfigContext } from '../../configs.context';

export const UpdateTab = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const configs = useConfigContext();
  console.log('selected', selectedValue)
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
