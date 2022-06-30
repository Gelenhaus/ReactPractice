import React, { useState } from 'react';
import './App.css';
import About from './components/About/index';
import Store from './components/Store/index';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, navbar } from 'react-bootstrap';


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
      <Navbar bg="myRed" variant="dark">
        <Navbar.Brand>
          The name of your company here.
      </Navbar.Brand>
      </Navbar>

      <h1 >This is an interactive web app.</h1>
      <button className="button" onClick={decrementCount}>subtract one </button>
      <p className="bookNumber">{count}</p>
      <button className="button" onClick={incrementCount}>add one </button>
      <About></About>
      <Store></Store>
    </div>
  );
}

export default App;
