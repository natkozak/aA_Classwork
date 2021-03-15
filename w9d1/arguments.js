

// function sum() { // can leave empty, because in Javascript functions can take any number of arguments. 
//   let arg = Array.from(arguments);
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++){
//     sum += arg[i];
//   }
//   return sum;
// }

function sum(...args){
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

// SUM TESTS 
// let a = sum(1, 2, 3, 4) === 10;
// let b = sum(1, 2, 3, 4, 5) === 15;

// console.log(a);
// console.log(b);



class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

console.log(markov.says("meow", "Ned"));
// Markov says meow to Ned!
// true

// HOW TO REMEMBER apply, bind, call: ABC!
// apply = array
// bind = bubble ()()()
// call = comma-separated

//First reason we want to monkey patch: mimicking behavior of the built-in bind function 
//Calling it on an instance of a function
Function.prototype.myBind = function(newContext) {
  let args = Array.from(arguments).slice(1);
  const that = this; // "that" will refer to the function we're calling it on.
  return function() {
    let call_args = Array.from(arguments); // don't need to slice, because when someone calls the bound function, they will never pass in the context.
    args = args.concat(call_args);
    return that.apply(newContext, args);
  }
} 
// markov.says.myBind(pavlov, "meow", "Kush") <-- if we were to not include extra parens and only write this, it would not call line 66 and instead return the anonymous function on line 63. When you invoke the function, that's when it runs line 66.
// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true