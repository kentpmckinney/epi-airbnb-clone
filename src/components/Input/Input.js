import React from "react";

function Input(props) {
  return (
    <div class="specialty-input">
      <label for={props.inputId}>{props.labelText}</label>
      <input type="text" name={props.inputId} placeholder={props.placeholderText} required />
    </div>
  );
}

export default Input;