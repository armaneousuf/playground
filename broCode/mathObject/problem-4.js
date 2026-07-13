// Clamp — clamp(value, min, max) restricts a number to a range.
// clamp(15, 0, 10) → 10, clamp(-5, 0, 10) → 0, clamp(5, 0, 10) → 5

function clamp(value, min, max){
    if(value > max) {
        return max
    } else if(value < min){
        return min
    } else {
        return value;
    } 
}

console.log(clamp(15, 0, 10));