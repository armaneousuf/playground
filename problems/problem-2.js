// Write a program that:

// Loops through numbers from 1 to 20.

// For each number, prints:

// "Fizz" if the number is divisible by 3

// "Buzz" if the number is divisible by 5

// "FizzBuzz" if divisible by both 3 and 5

// Otherwise, just print the number itself.

for (let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log('Fizz')
    } else if(i % 5 === 0){
        console.log('Buzz')
     } else {
        console.log(i)
    }
}