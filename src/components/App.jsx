import React from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import Card from './Card/Card';
import CardList from './CardList/CardList';
import './App.css';

import card1 from "./CardList/img/card1.png";


function App() {
  return (
    <React.Fragment>
      <main class="parent grid">
        <div class="div1"><Header /></div>
        <div class="div2"><Search /></div>
        <div class="div3"><Card /></div>
        <div class="div4"><Card img={card1}
          headline='Online Experiences'
          caption='Unique activities we can do together, let by a world of hosts.'
          key={0} /></div>
        <div class="div5">Frontline Stays</div>
        <div class="div6">We may be apart, but we'll get through<br />this together.</div>
      </main>
    </React.Fragment>
  )
}

export default App;