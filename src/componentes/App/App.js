
import React, {useState} from 'react'
import './App.css'
import QuoteBox from '../QuoteBox/QuoteBox'
import quotes from './quotes.json'
import getRandomColor from './functios'



function App() {

  const [randomIndex, setRandom] = useState(Math.trunc(Math.random() * quotes.length))
  
  const getRandomIndex = () => {
    return setRandom(Math.trunc(Math.random() * quotes.length));
  }

  const randomQuote = quotes[randomIndex].quote;
  const randomAutor = quotes[randomIndex].author;
  let randomColor = getRandomColor();

  return (
    <main style={{backgroundColor: `${randomColor}`}}>
      < QuoteBox
        randomQuote = {randomQuote}
        randomAutor = {randomAutor}
        clickIndex = {getRandomIndex}
        randomColor = {randomColor}
      />
    </main>
  );
}

export default App;
