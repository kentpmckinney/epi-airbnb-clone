import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <React.Fragment>
      <figure>
        <img src={props.img} alt={props.headline}></img>
        <figcaption>{props.headline}<br /><span>{props.caption}</span></figcaption>
      </figure>
    </React.Fragment>
  );
}

// Card.propTypes = {
//   img: PropTypes.string,
//   headline: PropTypes.string,
//   caption: PropTypes.string
// };

export default Card;