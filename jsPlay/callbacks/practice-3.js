// Use map to take [1,2,3,4,5] and return a new array where every number is squared.

console.log([1, 2, 3, 4, 5].map(n => n*2));

// Use filter to take [1,2,3,4,5] and return only numbers greater than 3. Then chain map on the result to double them.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((n) => n > 3).map(n => n*2));
