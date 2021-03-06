import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
import Root from "./components/root.jsx";
import { allTodos } from "./reducers/selectors.js";
import { fetchTodos, createTodo, deleteTodo, updateTodo } from './util/todo_api_util.js';

console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const hello = <h1>Ali and Nat's Cool Todo App</h1>

  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;
  window.deleteTodo = deleteTodo;
  window.updateTodo = updateTodo;


  ReactDOM.render(<Root store={store}/>, root);
})

// Set up your entry file todo_redux.jsx to render <h1>Todos App</h1> into your root page's #content container.