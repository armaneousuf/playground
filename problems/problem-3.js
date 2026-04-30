// Write a program that:

// Calculates the sum of all numbers in the array.

// Prints: "The sum is 24"

const numbers = [4, 7, 1, 9, 3];

let sum = 0;

for (const num of numbers){
    sum += num;
}
console.log(`The sum is ${sum}`)