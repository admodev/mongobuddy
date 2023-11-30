// Modules
import * as React from 'react';

// Styles
import './styles.css';

const CardComponent = (props) => {
  return(
    <div className='card'>
      <div className='cardHeader'>
        <h4 className='cardHeaderTitle'>Database: {props.database ?? ''}</h4>
        <div className="select">
          <select>
            {!props.database ? (<option>--Select--</option>) : props.database.forEach((db) => (
              <option>{db.name}</option>
            ))}
          </select>
          <div className="select_arrow">
          </div>
        </div>
        <h4 className='cardHeaderTitle'>Collection: {props.collection ?? ''}</h4>
        <div className="select">
          <select>
            {!props.collection ? (<option>--Select--</option>) : props.collection.forEach((col) => (
              <option>{col.name}</option>
            ))}
          </select>
          <div className="select_arrow">
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default CardComponent;
