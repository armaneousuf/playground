// Circle packing check — Given a square of side s and a circle of radius r, write doesCircleFitInSquare(s, r) that returns whether the circle fits inside the square without exceeding it.

function doesCircleFitInSquare(s, r){
    return 2 * r <= s;
}

console.log(doesCircleFitInSquare(10, 5));