import React from "react";

function testInputDivs(props) {
  return (
    <div class="specialty-input">
      <label for={props.id}>{props.labelText}</label>
      <input type="text" placeholder={props.placeholderText} required />
    </div>
  );
}

export default Ticket;