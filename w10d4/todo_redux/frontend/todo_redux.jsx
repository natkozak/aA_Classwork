import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';


console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const hello = <h1>Ali and Nat's Cool Todo App</h1>

  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;

  ReactDOM.render(hello, root);
})

// Set up your entry file todo_redux.jsx to render <h1>Todos App</h1> into your root page's #content container.