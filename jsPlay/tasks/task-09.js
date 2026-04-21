// Write a function transform(value, firstFn, secondFn) that passes value to firstFn, then passes the result to secondFn and prints the final output.

function transform(value, firstFn, secondFn){
    const firstResult = firstFn(value);
    const finalResult = secondFn(firstResult);
    console.log(finalResult);
}

transform(
    5, 
    (n)=> n*2,
    (n)=> n+3
);