// Write a function called myFilter(array, callback).

// Inside myFilter, loop through the array, pass each element to the callback, and return a new array containing only the elements where the callback returns true.

function myFilter(array, callback){
    const result = [];
    for(const arr of array){
        if(callback(arr)){
            result.push(arr)
        }
    }
    return result
}
const numbers = [1, 2, 3, 4, 5];

function isEven(num){
    return num % 2 === 0;
}

console.log(myFilter(numbers, isEven));
