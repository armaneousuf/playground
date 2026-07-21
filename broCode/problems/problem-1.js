// Given an array of numbers, return a new array with only the even ones.

const numbers = [10, 15, 20, 25, 30];

const evenArr = [];

numbers.forEach((n) => {
  if (n % 2 === 0) {
    evenArr.push(n);
  }
});

console.log(evenArr);
