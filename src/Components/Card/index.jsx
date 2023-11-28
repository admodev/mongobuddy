// Modules
import * as React from 'react';

// Styles
import './styles.css';

const CardComponent = (props) => {
  return(
    <div className='card'>
      {props.children}
    </div>
  );
};

export default CardComponent;
