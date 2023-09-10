import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('Button 1 Clicked');
  }
  const handleClick2 =() =>{
    alert('Button 2 Clicked');
  }

  const addFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h1>React Core Concepts</h1>
      <Friends></Friends>
      <Counter></Counter>
      <button onClick={handleClick}>Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={() => {alert('Button 3 Clicked')}}>Button 3</button>
      <button onClick={() => addFive(3)}>Button 4</button>
    </>
  )
}

export default App
