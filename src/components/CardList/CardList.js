import React from "react";
import Card from "../Card/Card";

const masterCardList = [
  {
    img: card1,
    headline: 'Online Experiences',
    caption: 'Unique activities we can do together, let by a world of hosts.'
  },
  {
    img: './img/card2.png',
    headline: 'Monthly Stays',
    caption: 'Make AirBnb your home, for stays of a month or longer.'
  },
  {
    img: './img/card3.png',
    headline: 'Frontline Stays',
    caption: 'Find or provide accommodations for COVID-19 responders.'
  }
];


function CardList() {

  return (
    <React.Fragment>
      <hr />
      {masterCardList.map((card, index) =>
        <Card img={card.img}
          headline={card.headline}
          caption={card.caption}
          key={index} />
      )}
    </React.Fragment>
  );
}

export default CardList;