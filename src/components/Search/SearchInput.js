import React from "react";

function SearchInput(props) {
  return (
    <div class="specialty-input" id={props.id}>
      <label for={props.searchType}>{props.labelText}</label>
      <input type="text" id={props.searchType} name={props.searchType} placeholder={props.placeholder} required />
    </div>
  );
}

export default Ticket;