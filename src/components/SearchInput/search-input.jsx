import React from 'react';

import './search-input.css';
import {
  WarningSearch,
  DisabledWarningSearch,
  Search,
  Close
} from '../../assets/svg';

export const SearchInput = ({ isFiltered, setIsFiltered, searchText, setSearchText }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClose = () => {
    setSearchText('');
  };

  const placeholder = 'User / Rig / Algo / Coin / Pool / Wallet / Conf_name';

  return (
    <div className="search-input max-content">
      <div className="search-input__wrapper">
        <div className="search-input__image-button">
          <Search />
        </div>

        <input
          className="search-input__text-container"
          type="text"
          placeholder={placeholder}
          value={searchText}
          onChange={handleChange}
        />

        {searchText ? (
          <button
            className="search-input__reset-button"
            type="button"
            onClick={() => handleClose()}
          >
            <Close />
          </button>
        ) : null}
      </div>

      <button
        className="search-input__sort-button"
        type="button"
        onClick={() => setIsFiltered(!isFiltered)}
      >
        {isFiltered ? <WarningSearch /> : <DisabledWarningSearch />}
      </button>
    </div>
  );
};
