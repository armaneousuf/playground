// Random from range — randomInRange(min, max) returns a random integer between min and max inclusive, for any min/max (not just 1–6 like the dice one).

function randomInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInRange(20, 30));