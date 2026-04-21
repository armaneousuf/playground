// Write a function calculate(a, b, operation) where operation is a callback. Call it three times passing different callbacks for addition, subtraction, and multiplication.

function calculate(a, b, operation) {
  return operation(a, b);
}
const a = 5;
const b = 10;
console.log(calculate(a, b, (x, y) => x + y));
console.log(calculate(a, b, (x, y) => y - x));
console.log(calculate(a, b, (x, y) => x * y));
