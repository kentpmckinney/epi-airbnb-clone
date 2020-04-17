import React from 'react';
import './Card.css';
import Card1 from "./img/kentcard.png";
// import card2 from "./img/card2.png";
// import card3 from "./img/card3.png";
import PropTypes from "prop-types";




function Card(props) {
  return (
    <React.Fragment>
      <figure>
        <img src={Card1} alt={props.headline}></img>
        <figcaption>{props.headline}<br /><span>{props.caption}</span></figcaption>
      </figure>
    </React.Fragment>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  headline: PropTypes.string,
  caption: PropTypes.string
};

export default Card;
// return (
//   <React.Fragment>

//       <div className="container">
//         <figure>
//           <img src={card1}
//             alt="card1" />
//           <figcaption>An elephant at sunset<br /><span>Unique activities we can do together, let by a world of hosts</span></figcaption>
//         </figure>
//       </div>



//   </React.Fragment>
// )

