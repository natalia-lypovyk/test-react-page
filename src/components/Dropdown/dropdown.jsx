import React, { useState } from 'react';

export const Dropdown = ({ selectedValue, setSelectedValue, configs }) => {
  const [isOpenDropdown, setOpenDropdown] = useState(false);

  // console.log('configs', configs)
  const handleOpen = () => {
    setOpenDropdown(!isOpenDropdown);
  };

  const onOptionClicked = (value) => {
    setSelectedValue(value);
    setOpenDropdown(false);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown__header"
        onClick={handleOpen}
      >
        {selectedValue.name || 'Choose config'}
      </div>

      {isOpenDropdown ? (
        <ul className="dropdown__list">
          {configs && configs.map((config) => (
            <li
              key={config.name}
              className="dropdown__item"
              onClick={() => onOptionClicked(config)}
            >
              {config.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
