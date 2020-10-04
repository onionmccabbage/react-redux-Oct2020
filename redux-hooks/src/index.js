import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from "react-redux";
import { createStore } from "redux";

import './index.css';
// redux
import reducer from "./store.js";
import App from './App';
import * as serviceWorker from './serviceWorker';
// redux
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
