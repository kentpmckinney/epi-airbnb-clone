import React from 'react';
import Input from './Input.js';

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
    <div>
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


// function CardList() {

//   return (
//     <React.Fragment>
//       <hr />
//       {masterCardList.map((card, index) =>
//         <Card img={card.img}
//           headline={card.headline}
//           caption={card.caption}
//           key={index} />
//       )}
//     </React.Fragment>
//   );
// }

// export default InputList;

// function Card(props) {
//   console.log(props)
//   return (
//     <React.Fragment>
//       <figure>
//         <img src={props.img} alt={props.headline}></img>
//         <figcaption>{props.headline}<br /><span>{props.caption}</span></figcaption>
//       </figure>
//     </React.Fragment>
//   );
// }