import React from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <main class="parent grid">
        <div class="div1"><Header /></div>
        <div class="div2"><Search /></div>
        <div class="div3">Online Experiences</div>
        <div class="div4">Monthly Stays</div>
        <div class="div5">Frontline Stays</div>
        <div class="div6">We may be apart, but we'll get through<br />this together.</div>
      </main>
    </React.Fragment>
  )
}

export default App;