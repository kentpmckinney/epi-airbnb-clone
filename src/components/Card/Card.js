import React from 'react';
import './card.css';
import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";

function Card() {

  return (
    <React.Fragment>
      <div>
        <h1>We may be apart, but we’ll <br /> get through this together.</h1>
        <div className="container">
          <figure>
            <img src={card1}
              alt="card1" />
            <figcaption>An elephant at sunset<br /><span>Unique activities we can do together, let by a world of hosts</span></figcaption>
          </figure>
          {/* <div className="">
            <img src="./card1.png" alt="card1"/>
            <p>Online Experiences</p>
            <p>Unique activities we can do together, let by a world of hosts</p>
          </div> */}
          <figure>
            <img src={card2}
              alt="card2" />
            <figcaption>An elephant at sunset<br /><span>Unique activities we can do together, let by a world of hosts</span></figcaption>
          </figure>
          <figure>
            <img src={card3}
              alt="card3" />
            <figcaption>An elephant at sunset<br /><span>Unique activities we can do together, let by a world of hosts</span></figcaption>
          </figure>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Card;
