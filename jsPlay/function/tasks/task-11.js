// const ages =[12, 18, 25, 14, 30, 9];
// const adults = ages.filter((age) => age >= 18);
// console.log(adults)


function multiplier(factor) { // this is the main factory
  return function(number) { // this is the calculator whats going to be be the aftermath and it's also closure 
    return number * factor; // this is where all the calculating happens
  };
}

const double = multiplier(2); // new machine and 2 is the argument for factor
const triple = multiplier(3); // another new machine and 3 is the argument for factor again (new)

console.log(double(5));  // since factor already has it's argument so 5 is now argument for 
console.log(triple(5)); // same as before. double holds multiplier which is factor's arg and calling double means setting up number's arg