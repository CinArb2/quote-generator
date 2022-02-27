import React from 'react';
import './QuoteBox.css';
import Button from '../button/Button';

function QuoteBox({randomQuote, randomAutor, clickIndex, randomColor}) {
   
  return (
    <div className="quote-box" style={{color: `${randomColor}`}}>
      <div className='quote-wrapper'>
        <i className="fa-solid fa-quote-left" style={{color: `${randomColor}`}}></i>
        <p className="quote">{randomQuote}</p>
      </div>
      <em className="quote-autor" >{randomAutor}</em>
      < Button
        index={clickIndex}
        color={randomColor}
      />
    </div>
  );
}

export default QuoteBox;