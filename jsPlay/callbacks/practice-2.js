// Write a function double(num) that logs num * 2. Pass it to forEach over an array.

let numbers = [1, 2, 3, 4, 5];

function double(num){
    console.log(num * 2);
}

// numbers.forEach((n) => double(n))
numbers.forEach(double)

// Write a function shout(str) that logs a string in uppercase. Write another function processString(callback) that has a string inside and calls the callback with it.

function shout(str){
    console.log(str.toUpperCase());
}

function processString(callback){
    const string = 'this is a string';
    callback(string)
}

processString(shout)
