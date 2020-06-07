import React, {useState} from 'react';
import './App.css';

import Validation from './ValidationComponent/Validation'
import Char from './charComponent/char'

function App(){

  const [inputText, newInputText] = useState('')

  const print = event => {
    newInputText(event.target.value)
  }

  const deleteSymbol = index => {
    let symbols = [...inputText.split('')]
    symbols.splice(index, 1)
    newInputText(symbols.join(''))
  }

  const chars = (
    inputText.split('').map((symbol, index) => {
      return <Char name={symbol} key={index} clicked={() => deleteSymbol(index)}/>
  }))

  return (
    <div className="App">
      <h1>Assigment 2</h1>
      <h2>07.06.2020</h2>
      {/* <p>By Tigran Badalyan</p> */}
      <input value={inputText} type="text" onChange={print}/>
      <p>{inputText}</p>
      <Validation length={inputText.length}/>
      {chars}
    </div>
  );
}

export default App;
