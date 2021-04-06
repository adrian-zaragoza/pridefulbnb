import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  ReactDOM.render(<h1>React is working</h1>, root);
})

  // < Root store = { store } />