// Write a function called formatPrice that takes a number.
// It should add a $ sign to the front.
// It should ensure there are always 2 decimal places.
// (Hint: use the .toFixed(2) method on the number).
// Example: formatPrice(5) should return "$5.00".

function formatPrice(num){
    return `$${num.toFixed(2)}`
}

console.log(formatPrice(5))