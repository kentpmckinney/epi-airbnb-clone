import React from "react";

function Input(props) {
  return (
    <div className="search-grid-item">
      <label className="search-label" htmlFor={props.inputId}>
        <div className="search-label-text">{props.labelText}</div>
      <input type="text" min-length={45} className="search-input" name={props.inputId} placeholder={props.placeholderText} required />
      </label>
    </div>
  );
}

export default Input;