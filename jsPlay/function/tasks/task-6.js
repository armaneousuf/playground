// Look at this code and tell me the order in which these functions are Popped Off (removed from) the Call Stack:

function getIceCream() {
  return "Ice Cream";
}

function getDessert() {
  return getIceCream();
}

function eat() {
  const meal = getDessert();
  console.log(meal);
}

eat();

// Output: Ice cream