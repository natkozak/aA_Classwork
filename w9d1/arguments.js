

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
// Function.prototype.myBind = function(newContext) {
//   let args = Array.from(arguments).slice(1);
//   const that = this; // "that" will refer to the function we're calling it on.
//   return function() {
//     let call_args = Array.from(arguments); // don't need to slice, because when someone calls the bound function, they will never pass in the context.
//     args = args.concat(call_args);
//     return that.apply(newContext, args);
//   }
// } 


Function.prototype.myBind = function(newContext, ...args) {
  
  const that = this; // "that" will refer to the function we're calling it on.
  return function(...callArgs) {
    // don't need to slice, because when someone calls the bound function, they will never pass in the context.
    args = args.concat(callArgs);
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



function curriedSum(numArgs) {
  const numbers = [];
  return function _curriedSum(num) {
    numbers.push(num)
    if (numbers.length === numArgs) { 
        let sum = 0;
        for(let i = 0; i < numArgs; i++) {
          sum += numbers[i];
        }
        return sum;
    } else {
      return _curriedSum;
    }
  }
  // return _curriedSum;
}

// const currySum = curriedSum(4);
// console.log(currySum(5)(30)(20)(1)); // => 56





// version that uses Function.prototype.apply
Function.prototype.curry = function(numArgs) {
  const that = this;
  const args = [];

  return function _curry(arg) {
    args.push(arg)
    if (args.length === numArgs) {
      // Using Function.prototype.apply:
      // null tells them you're not going to change the default context at all
      // using apply to call sumFunction (the instance of the Function object)
      // return that.apply(null, args); 


      // Using the spread operator (same result as line 139):
      return that(...args);
    } else {
      return _curry;
    }
  }

  // If there are too few arguments still, it should return itself.

  // When there are numArgs arguments, it should "call the original function".

}

const sumFunction = function(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

const currySumFunction = sumFunction.curry(5);
console.log(currySumFunction(1)(2)(3)(4)(5)); // 15



// and another one that uses ... (the spread operator).
Function.prototype.curry = function (numArgs) {
  // Collect up arguments until there are numArgs of them,

  //   If there are too few arguments still, it should return itself.

  // When there are numArgs arguments, it should call the original function.

}