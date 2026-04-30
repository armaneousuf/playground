function greet(name) {
  // we will pass greet as an argument to processUserInput in line 10.
  console.log(`Hello, ${name} 👋`); // Prints Hello, Alice when called through processUserInput
}

function processUserInput(callback) {
  // callback will use name alice
  const person = "Alice";
  callback(person);
}

processUserInput(greet); // processUserInput users greet and prints Hello and the name Alice it takes from callback(person)

