
const MO = {
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
}

function MovingObject(object) {
  this.pos = object.pos;
  this.vel = object.vel;
  this.radius = object.radius;
  this.color = object.color;
}


module.exports = MovingObject;