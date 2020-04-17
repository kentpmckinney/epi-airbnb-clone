import React from "react";
import SearchInput from "./SearchInput";

const masterInputList = [
  {
    location: 'Tokyo',
    date: 'April 16, 2020',
    guests: '2'
  },
  {
    location: 'Berlin',
    date: 'November 1, 2020',
    guests: '3'
  },
  {
    location: 'Moscow',
    date: 'December 25, 2020',
    guests: '1',
  }
];
return (
  <React.Fragment>
    <hr />
    {masterInputList.map((input, index) =>
      <SearchInput location={input.search}
        date={input.date}
        guests={input.guests}
        key={index} />
    )}
  </React.Fragment>
);
function SearchInput() {
  return (
    <React.Fragment>
      <SearchInput
        location="Tokyo"
        date="April 16, 2020"
        guests="2" />
      <SearchInput
        location="Berlin"
        date="November 1, 2020"
        guests="3"
      />
    </React.Fragment>
  );
}

export default SearchInput;