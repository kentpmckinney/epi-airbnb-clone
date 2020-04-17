import React from 'react';
import Input from 'Input.js';

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
]

function InputList() {
  return (
    <React.fragment>
      {masterInputList.map((input, index) => {
        <Input inputId={input.id}
          labelText={input.labelText}
          placeholderText={input.placeholderText}
          key={index} />
      })}
    </React.fragment>
  )
}

export default InputList;