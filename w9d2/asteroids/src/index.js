console.log("Webpack is working!")

// index.js
const Asteroid = require("./asteroid.js");

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  window.Asteroid = Asteroid; // Can only have one window.[object_name] at a time
});

