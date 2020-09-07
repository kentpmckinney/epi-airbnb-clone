import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div id='figure'>
      <img className='cardimg' src={props.img} alt={props.headline}></img>
      <div id='figcaption'>{props.headline}<br /><span id='cardspan'>{props.caption}</span></div>
    </div>
  );
}

export default Card;