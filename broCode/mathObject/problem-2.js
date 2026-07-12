// Dice roll — Write rollDice() that returns a random integer between 1 and 6, inclusive.

function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice());