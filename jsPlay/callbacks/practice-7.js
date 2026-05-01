// Multiply all numbers in [1,2,3,4,5] together using reduce — starting value should be 1 not 0, think about why

const numbers = [1, 2, 3, 4, 5];
const multiply = numbers.reduce((acc, current) => {
    return acc*current;
}, 1)

console.log(multiply);

// Find the largest number in [3,1,4,1,5,9,2,6] using reduce

const number = [3, 1, 4, 1, 5, 9, 2, 6];
const largestNumber = number.reduce((acc, current) => {
    if(acc > current){
        return acc
    } return current
}, 0)

console.log(largestNumber);