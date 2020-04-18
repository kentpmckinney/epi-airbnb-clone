import React from "react";

function Input(props) {
  return (
    <div className="specialty-input">
      <label htmlFor={props.inputId}>{props.labelText}</label>
      <input type="text" name={props.inputId} placeholder={props.placeholderText} required />
    </div>
  );
}

export default Input;