import React from 'react';

import './search-input.css';
import {
  WarningSearch,
  DisabledWarningSearch,
  Search,
  Close
} from '../../assets/svg';

export const SearchInput = (props) => {
  const {
    isFiltered,
    setFiltered,
    isFilteredOffline,
    setFilteredOffline,
    filterOffline,
    searchText,
    setSearchText
  } = props;

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
        onClick={() => {
          console.log('filtered');
          setFilteredOffline(!isFilteredOffline);
          filterOffline();
        }}
      >
        {isFilteredOffline ? <WarningSearch /> : <DisabledWarningSearch />}
      </button>

      <button
        className="search-input__sort-button"
        type="button"
        onClick={() => setFiltered(!isFiltered)}
      >
        {isFiltered ? <WarningSearch /> : <DisabledWarningSearch />}
      </button>
    </div>
  );
};
