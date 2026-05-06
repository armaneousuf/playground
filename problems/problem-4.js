/*
Finds the largest number in the array.

Prints: "The largest number is 21"
*/

const numbers = [12, 5, 8, 21, 3, 17];

let max = numbers[0];

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i]
    }
}
console.log(max)
