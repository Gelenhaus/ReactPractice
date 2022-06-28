import React, { useState } from 'react';
import './App.css';
import About from './components/About/index';
import Store from './components/Store/index';


function App() {

  const [count, setCount] = useState(50)
  function decrementCount() {
    setCount(count - 1)
  }
  function incrementCount() {
    setCount(count + 1)
  }

  return (
    <div >

      <h1 >Which book would you like to know about.</h1>
      <button className="button" onClick={decrementCount}>subtract one </button>
      <p className="bookNumber">{count}</p>
      <button className="button" onClick={incrementCount}>add one </button>
      <About></About>
      <Store></Store>
    </div>
  );
}

export default App;
