import React from 'react';
import Header from './Header/Header';
import InputList from './Input/InputList';
// import Search from './Search/Search';
// import CardList from './CardList/CardList';
import Card from './Card/Card';
import card1 from "./CardList/img/card1.png";
import card2 from "./CardList/img/card2.png";
import card3 from "./CardList/img/card3.png";
import './App.css';


function App() {
  return (
    <React.Fragment>
      <main className="appgrid">
        <div className="appdiv1"><Header /></div>
        <div className="appdiv2"><InputList /></div>
        <div className="appdiv3">
          <Card img={card1}
            headline='Online Experiences'
            caption='Unique activities we can do together, let by a world of hosts.'
            key={0} />
        </div>
        <div className="appdiv4">
          <Card img={card2}
            headline='Monthly stays'
            caption='Make Airbnb your home, for stays of a month or longer.'
            key={0} />
        </div>
        <div className="appdiv5">
          <Card img={card3}
            headline='Frontline stays'
            caption='Find or provice accommodations for COVID-19 responders.'
            key={0} />
        </div>
        <div className="appdiv6">We may be apart, but we'll get through<br />this together.</div>
      </main>
    </React.Fragment>
  )
}

export default App;