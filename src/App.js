import React, { useState } from 'react';
import './App.css';
import About from './components/About/index';
import Store from './components/Store/index';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, navbar } from 'react-bootstrap';
import decadent from './assets/decadent/decadent.jpeg'


function App() {

  const [count, setCount] = useState(409)
  function decrementCount() {
    setCount(count - 1)
  }
  function incrementCount() {
    setCount(count + 1)
  }

  return (
    <div >
      <Navbar bg="success" variant="dark">
        <Navbar.Brand >
          <img src={decadent}></img>
          Rome before it went to shit
        </Navbar.Brand>



      </Navbar>

      <h1 >The average life expectancy for a democracy is about 200 years</h1>
      <p>Note using the buttons the difference between years</p>
      <button className="button" onClick={decrementCount}>subtract one </button>
      <p className="bookNumber">{count}</p>
      <button className="button" onClick={incrementCount}>add one </button>
      <Store></Store>
      <About></About>

    </div>
  );
}

export default App;
