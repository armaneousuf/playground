// Write a function called runTwice that takes another function as an argument and executes that function two times.

function runTwice(callback){
    callback();
    callback();
}

runTwice( ()=> console.log('Hello'));