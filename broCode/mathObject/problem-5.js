// Is it an integer? — isWholeNumber(n) using only Math methods (no Number.isInteger) to check if a number has no decimal part.

function isWholeNumber(n){
    return n === Math.trunc(n)
}

console.log(isWholeNumber(5.5));
console.log(isWholeNumber(5));