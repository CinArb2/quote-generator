import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button onClick={props.index} style={{backgroundColor: `${props.color}`}}>
      <i className="fa-solid fa-angle-right"></i>
    </button>
  );
}

export default Button;