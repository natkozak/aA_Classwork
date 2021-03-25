import React from 'react';
import ReactDOM from 'react-dom';

console.log("Webpack is working!")

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const hello = <h1>Ali and Nat's Cool Todo App</h1>

  ReactDOM.render(hello, root);
})

// Set up your entry file todo_redux.jsx to render <h1>Todos App</h1> into your root page's #content container.