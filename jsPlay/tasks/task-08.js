// Write a function multiplier(x) that returns a function. The returned function should take a number n and return x * n.

function multiplier(x){
    return function double(n){
        console.log(x*n);
    }
}

const double = multiplier(5);
double(2)