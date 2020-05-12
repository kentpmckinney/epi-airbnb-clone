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

// <div id="search-bar" class="search-grid-container">

// <div class="search-grid-item">
//   <label class="search-label">
//     <div class="search-label-text">LOCATION</div>
//     <input type="text" min-length=45 class="search-input" placeholder="Add city, landmark, or address">
//   </label>
// </div>
//   <div class="search-grid-item">
//   <label class="search-label">
//     <div class="search-label-text">CHECK IN / CHECK OUT</div>
//     <input type="text" min-length=45 class="search-input" placeholder="Add dates">
//   </label>
// </div>
//   <div class="search-grid-item">
//   <label class="search-label">
//     <div class="search-label-text">GUESTS</div>
//     <input type="text" min-length=45 class="search-input" placeholder="Add guests">
//   </label>
// </div>
//   <div class="search-grid-item-button">
//     <button type="button" id="search-button">&#128269Search</button>
//   </div>
// </div>