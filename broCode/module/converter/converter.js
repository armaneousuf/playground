function kmToMiles(km) {
  return km * 0.621371 + ' miles';
}

function celsiusToFahrenheit(c) {
  return c * 1.8 + 32 + ' F';
}

function formatBDT(amount) {
  return `৳ ${amount.toFixed(2)}`;
}

export { kmToMiles, celsiusToFahrenheit, formatBDT };
