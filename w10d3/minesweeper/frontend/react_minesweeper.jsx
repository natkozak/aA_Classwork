

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';

// test connections
console.log("Webpack is working!")

// event listener
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // const hello = <h1>Hello World, from React</h1>
  // const game = Minesweeper.game;

  ReactDOM.render(<Game />, root);
})