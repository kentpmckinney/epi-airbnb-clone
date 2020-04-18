import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <React.Fragment>
      <div id='figure'>
        <img className='cardimg' src={props.img} alt={props.headline}></img>
        <div id='figcaption'>{props.headline}<br /><span id='cardspan'>{props.caption}</span></div>
      </div>
    </React.Fragment>
  );
}

// Card.propTypes = {
//   img: PropTypes.string,
//   headline: PropTypes.string,
//   caption: PropTypes.string
// };

export default Card;