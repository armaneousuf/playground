// Create a main function called calculate(num1, num2, callback).

// Create three separate callback functions: add, subtract, and multiply.

// When you call calculate(5, 3, add), it should return 8.

// When you call calculate(5, 3, multiply), it should return 15.

function calculate(num1, num2, calculate){
    return calculate(num1, num2)
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

console.log(calculate(5, 3, multiply));