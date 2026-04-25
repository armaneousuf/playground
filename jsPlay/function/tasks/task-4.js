// Write a function calculateArea that takes width and height. If the height is missing (undefined), the function should assume the shape is a square and use the width for both dimensions.

function calculateArea(width, height) {
  if (height === undefined) {
    return width * width;
  }

  return width * height;
}

console.log(calculateArea(5, 10));
console.log(calculateArea(5));
