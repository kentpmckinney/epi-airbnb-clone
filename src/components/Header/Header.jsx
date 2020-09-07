import React from 'react';
import Nav from './Nav';
import logo from './img/logo.png';
import './Header.css';

function Header() {
  return (
      <div className="header">
        <div className="div1header"><img src={logo} alt=''></img><span className='logotext'>airbnb</span></div>
        <div className="div2header"> </div>
        <div className="div3header"><Nav /></div>
      </div>
  );
}

export default Header;