// Modules
import * as React from 'react';

// Components
import { BiLeaf } from 'react-icons/bi';

// Styles
import './styles.css';

const HeaderComponent = () => {
  return(
    <div className='header'>
        <BiLeaf className='titleIcon' /> <h1 className='title'>MongoBuddy</h1>
    </div>
  );
};

export default HeaderComponent;
