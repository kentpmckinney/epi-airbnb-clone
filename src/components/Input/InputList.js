import React from 'react';
import Input from './Input.js';
import './Input.css';

const masterInputList = [
  {
    inputId: 'location',
    labelText: 'LOCATION',
    placeholderText: 'Add city, landmark, or address'
  },
  {
    inputId: 'dates',
    labelText: 'CHECK IN / CHECK OUT',
    placeholderText: 'Add dates'
  },
  {
    inputId: 'guests',
    labelText: 'GUESTS',
    placeholderText: 'Add guests'
  }
];

function InputList() {
  return (
    <div id="search-bar" className="search-grid-container">
      {masterInputList.map((input, index) =>
        <Input inputId={input.inputId}
          labelText={input.labelText}
          placeholderText={input.placeholderText}
          key={index} />
      )}
    </div>
  )
}

export default InputList;