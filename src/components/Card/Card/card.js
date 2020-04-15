import React from 'react';
import './card.css';

function Card() {
 
  return (
    <React.Fragment>
      <div>
        <h1>We may be apart, but we’ll <br /> get through this together.</h1>
        <div>
          <img src="card1.png" alt="card1"/>
          <p>Online Experiences</p>
          <p>Unique activities we can do together, let by a world of hosts</p>
          {/* <img src="" alt="card2"/>
          <img src="" alt="card3"/> */}
        </div>
        <div>
          <img src="card2.png" alt="card2"/>
          <p>Monthly stays</p>
          <p>Make Airbnb your home, for stays of a month or longer.</p>
        </div>
        <div>
          <img src="card3.png" alt="card3"/>
          <p>Frontline stays</p>
          <p>Find or provide accommodations for COVID-19 responders.</p>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Card;
