const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Bullet = require("./bullet.js");
const Ship = require("./ship.js");

function Game() {
  const DIM_X = 100;
  const DIM_Y = 100;
  const NUM_ASTEROIDS = 10;
  this.asteroids = this.addAsteroids(NUM_ASTEROIDS);
  
}

Game.prototype.randomPosition = function() {
  return Math.floor((Math.random() * 100));
};

Game.prototype.addAsteroids = function(num) {
  let arr = []; 
  for(let i = 0; i < num; i++) {
    let pos = Game.randomPosition();
    let coin = new Asteroid(pos); 
    arr.push(coin);
  };
  return arr;
};
