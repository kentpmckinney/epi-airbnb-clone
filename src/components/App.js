import React from 'react';
import Header from './Header.js';
import TicketList from './TicketList.js';

function App() {
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  )
}

export default App;