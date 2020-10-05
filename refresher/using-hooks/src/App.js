import React from 'react';

// we need some stuff from react-redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import './App.css';
import List from './components/List'
import Form from './components/Form'

// a functional component
function App() {
  // maybe we need acces to our 'num' model from the store- use a hook
  const counter = useSelector(state => state)// we get the whole state
  // we need access to 'dispatch'
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>Using React, Redux, Middleware and Thunk</h2>
      <h4>Counter num is: {counter.num}</h4>
      <button onClick={() => { return dispatch({ type: 'INCREMENT', step: 1 }) }} >Increment by 1</button>
      <button onClick={() => { return dispatch({ type: 'DECREMENT', step: 1 }) }} >Decrement by 1</button>
      <hr />
      <List />
      <hr />
      <Form />
      <hr />
      <h4>Title is currently: {counter.title}</h4>
    </div>
  );
}

export default App;
