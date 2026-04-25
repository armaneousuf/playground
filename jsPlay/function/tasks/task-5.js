// Create a Function Expression (assigning a function to a const) called isAdult. It should take an age and return true if the age is 18 or above, and false otherwise.

const isAdult = function(age) {
    if(age >= 18){
        return true;
    }

    return false;
}

console.log(isAdult(10))