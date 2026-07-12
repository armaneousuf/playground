// Write a function roundToDecimal(num, places) that rounds a number to a given number of decimal places. E.g. roundToDecimal(3.14159, 2) → 3.14

function roundToDecimal(num, places) {
    let factor = 10 ** places;

    return Math.round(num * factor) / factor;
}

console.log(roundToDecimal(3.14159, 2));