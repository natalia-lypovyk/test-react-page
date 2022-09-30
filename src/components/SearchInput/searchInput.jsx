import React from 'react';

import './searchInput.css'
import WarningSearch from '../../assets/svg/warningSearch';
import DisabledWarningSearch from '../../assets/svg/disabledWarningSearch';
import Search from '../../assets/svg/search';
import Close from '../../assets/svg/close';

const SearchInput = ({ isFiltered, setIsFiltered, searchText, setSearchText }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClose = () => {
    setSearchText('')
  };

  const placeholder = 'User / Rig / Algo / Coin / Pool / Wallet / Conf_name';

  return (
    <div className="inputContainer">
      <div className="inputWrapper">
        <div className="imageButton">
          <Search />
        </div>

        <input
          placeholder={placeholder}
          className="inputTextContainer"
          value={searchText}
          type="text"
          onChange={handleChange}
        />

        {searchText && (
          <div
            className="imageButton"
            onClick={() => handleClose()}
          >
            <Close />
          </div>
        )}
      </div>

      <div
        className="imageContainer"
        onClick={() => setIsFiltered(!isFiltered)}
      >
        {isFiltered ? <WarningSearch /> : <DisabledWarningSearch />}
      </div>
    </div>
  );
};

export default SearchInput;
