import React from 'react';
import locale from './img/locale.png';
import dropdown from './img/dropdown.png';
import './Nav.css';

function Nav() {
  return (
    <React.Fragment>
      <span>
        <ul className='nav'>
          <li><img src={locale} alt='locale'></img><img src={dropdown} alt=''></img></li>
          <li><a>Host your home</a></li>
          <li><a>Host an experience</a></li>
          <li><a>Help</a></li>
          <li><a>Log in</a></li>
          <button className='signup'>Sign up</button>
        </ul>

      </span>

    </React.Fragment>
  );
}

export default Nav;

