// Write a function isOdd that returns true if a number is odd and false if it is even. Use an Arrow Function.

isOdd = (n) => {
    if(n % 2 === 1){
        return true
    }
    return false
}

console.log(isOdd(6))