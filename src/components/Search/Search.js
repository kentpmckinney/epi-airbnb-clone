import React from 'react';
import SearchInputText from './SearchInputText';
import SearchInputDate from './SearchInputDate';
import SearchInputDropdown from './SearchInputDropdown';
import SearchButton from './SearchButton';

function Search() {
    return (
        <React.Fragment>
            <SearchInputText />
            <SearchInputDate />
            <SearchInputDropdown />
            <SearchButton />
        </React.Fragment >
    );
}

export default Search;