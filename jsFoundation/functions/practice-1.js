const roundTo = function (n, step) {
  let reminder = n % step;
  console.log(reminder);
  return n - reminder + (reminder < step / 2 ? 0 : step);
};

console.log(roundTo(48, 5));