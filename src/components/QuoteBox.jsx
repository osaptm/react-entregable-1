import { useState } from 'react'
import ButtonChange from './ButtonChange'
import quotes from '../db/quotes.json'

const randomIndex = () => Math.floor(Math.random() * (quotes.length-1));
const randomColor = () => '#'+Math.floor(Math.random()*16777215).toString(16);

function QuoteBox() {
  const [color, setColor] = useState(randomColor());
  const [indexPhrase, setIndexPhrase] = useState(randomIndex());
  document.body.style.backgroundColor = color;

  const changeColorAndPhrase = () => {
    document.body.style.backgroundColor = color;
    setColor(randomColor()); 
    setIndexPhrase(randomIndex()); 
  }


  

  return (
    <>
      <div className="quotebox">
        <div style={{color:color}}>
          <h1><i className="fa-solid fa-quote-left"></i>{quotes[indexPhrase].quote}</h1>
          <cite>{quotes[indexPhrase].author}</cite>
        </div>
        <ButtonChange randomColor={color}  changeColorAndPhrase={changeColorAndPhrase} />
      </div>
    </>
  )
}

export default QuoteBox
