import React from 'react';
import locale from './img/locale.png';
import dropdown from './img/dropdown.png';
import './Nav.css';

function Nav() {
  return (
    <ul className='nav navul'>
      <li className='navli'><img src={locale} alt='locale'></img><img src={dropdown} alt=''></img></li>
      <li className='navli'><a href='#1'>Host your home</a></li>
      <li className='navli'><a href='#2'>Host an experience</a></li>
      <li className='navli'><a href='#3'>Help</a></li>
      <li className='navli'><a href='#4'>Log in</a></li>
      <li className='navli'><button className='signup'>Sign up</button></li>
    </ul>
  );
}

export default Nav;