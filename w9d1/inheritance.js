// Function.prototype.inherits = function(Parent) {
//     Child = this;
//     function Surrogate() {}
//     Surrogate.prototype = Parent.prototype;
//     Child.prototype = new Surrogate();
//     Child.prototype.constructor = Child;
// }

Function.prototype.inherits = function(Parent) {
    Child = this;
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}



function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);
let enterprise = new Ship();
console.log(enterprise.__proto__);


function Asteroid () {}
Asteroid.inherits(MovingObject);

console.log('hello');