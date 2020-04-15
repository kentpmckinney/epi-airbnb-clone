import React from 'react';
import Nav from './Nav';
import Logo from './logo.png';

function Header() {
  return (
    <React.Fragment>
      <div class="header">
        <div class="div1header"><img src={Logo} alt=''></img><span class='logotext'>airbnb</span></div>
        <div class="div2header"> </div>
        <div class="div3header"><Nav /></div>
      </div>
    </React.Fragment>
  );
}

export default Header;