import React from 'react';

// we need some stuff from react-redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import './App.css';
import ListUsingConnect from './components/ListUsingConnect'
import FormUsingConnect from './components/FormUsingConnect'
// hook versions
import ListUsingHooks from './components/ListUsingHooks'
import FormUsingHooks from './components/FormUsingHooks'

// a functional component using Hooks
const App = () => {
  // maybe we need acces to our 'num' model from the store- use a hook
  const counter = useSelector(state => state)// we get the whole state
  // we need access to 'dispatch'
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h2>Using React and Redux with Connect and with Hooks</h2>
      <h4>Counter num is: {counter.num}</h4>
      <button onClick={() => { return dispatch({ type: 'INCREMENT', step: 1 }) }} >Increment by 1</button>
      <button onClick={() => { return dispatch({ type: 'DECREMENT', step: 1 }) }} >Decrement by 1</button>
      <hr />
      <ListUsingConnect />
      <hr />
      <ListUsingHooks />
      <hr />
      <FormUsingConnect />
      <hr />
      <FormUsingHooks />
      <hr/>
      <h4>Title is currently: {counter.title}</h4>
      
    </div>
  );
}

export default App;
