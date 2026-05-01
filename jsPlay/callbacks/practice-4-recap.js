// Write your own myMap(arr, callback) from scratch — it should loop through the array, call the callback on each item, collect the results and return a new array. Test it with double.

function myMap(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

function double(n) {
  return n * 2;
}

console.log(myMap([1, 2, 3, 4, 5], double))