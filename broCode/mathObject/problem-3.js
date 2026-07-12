// Distance between two points — Given (x1, y1) and (x2, y2), write distance(x1, y1, x2, y2) using the distance formula. (Hint: you'll need Math.sqrt and exponents.)

function distance(x1, y1, x2, y2) {
  let dx = x1 - x2;
  let dy = y1 - y2;

  return Math.sqrt(dx * dx + dy * dy);
}

console.log(distance(0, 0, 3, 4));

/*
x1 = 0
x2 = 3
y1 = 0
y2 = 4

dx = -3
dy = -4

dx*dx = 9
dy*dy = 16

total of them = 25 which is sqrt root of 5 
*/
