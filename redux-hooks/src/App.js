import React from 'react';
// import logo from './logo.svg';
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import './App.css';
import List from './components/List' // NB no {} here
import Form from './components/Form'
import Counter from './components/Counter'

function App() {
  const counter = useSelector(state => state); // we could change 'counter' to 'state' i.e. local state
  const dispatch = useDispatch();
  return (
    <article className="App">
      <h2>Simple Example</h2>
      <p>Value of msg: {counter.msg}</p>
      <h3>{counter.num}</h3>
      <button onClick={ () => dispatch({ type: "INCREMENT", step: 1 }) }>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", step: 1 }) }>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET"  }) }>
        Reset
      </button>
      <hr />
      <List />
      <hr />
      <Form />
      <hr />
      <p>Title: {counter.title}</p>
      <hr />
      <Counter />
    </article>
  )
}

export default App;
