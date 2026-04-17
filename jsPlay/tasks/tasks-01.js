// Write two functions. One calls the other. Before the inner function finishes, use console.log to print something. Predict the stack order before you run it.

function first() {
    second();
    console.log('I am first, but will print last because I will wait to finish second() to finish')
}

function second(){
    console.log('Hi, I am second, but will print first because of call stack')
}

first()