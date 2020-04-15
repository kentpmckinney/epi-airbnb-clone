import React from 'react';
import Search from './Search'

function SearchInputDate() {
  return (
    <React.Fragment>
      <label for="dateOfTravel">Check In/ Check Out</label>
      <input name="dateOfTravel" type="date" placeholder="Add Date" />
    </React.Fragment>
  );
}

export default SearchInputDate;

