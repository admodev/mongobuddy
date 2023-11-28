// Modules
import * as React from 'react';

// Components
import { BiSolidCoffeeTogo, BiSolidCog, BiSolidHome, BiSolidInfoCircle } from 'react-icons/bi';

// Styles
import './styles.css';

const SideNavComponent = () => {
  return(
    <nav className='sideNavMenu'>
      <div className='navLinksContainer'>
        <BiSolidHome className='navLinkIcon' /> <a className='navLinks'>Home</a>
      </div>
      <div className='navLinksContainer'>
        <BiSolidCog className='navLinkIcon' /> <a className='navLinks'>Config</a>
      </div>
      <div className='navLinksContainer'>
        <BiSolidInfoCircle className='navLinkIcon' /> <a className='navLinks'>About</a>
      </div>
      <div className='navLinksContainer'>
        <BiSolidCoffeeTogo className='navLinkIcon' /> <a className='navLinks'>Invite me a coffee</a>
      </div>
    </nav>
  );
};

export default SideNavComponent;
