import React from 'react';
import Locale from './locale.png';
import Dropdown from './dropdown.png';

function Nav() {
  return (
    <React.Fragment>
      <span>
        <ul class='nav'>
          <li><img src={Locale} alt='locale'></img><img src={Dropdown} alt=''></img></li>
          <li><a>Host your home</a></li>
          <li><a>Host an experience</a></li>
          <li><a>Help</a></li>
          <li><a>Log in</a></li>
          <button class='signup'>Sign up</button>
        </ul>

      </span>

    </React.Fragment>
  );
}

export default Nav;

