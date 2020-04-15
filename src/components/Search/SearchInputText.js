import React from 'react';
import Search from './Search'

function SearchInputText() {
  return (
    <React.Fragment>
      <label for="location">Location</label>
      <input name="location" type="text" placeholder="Add city, landmark, or address" />
    </React.Fragment>
  );
}

export default SearchInputText;