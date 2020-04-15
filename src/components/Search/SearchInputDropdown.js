import React from 'react';
import Search from './Search'

function SearchInputDropdown() {
  return (
    <React.Fragment>
      <label for="numberOfGuests">Number of Guests:</label>
      <input name="numberOfGuests" type="number" placeholder="Number of Guests" />
    </React.Fragment>
  );
}

export default SearchInputDropdown;

