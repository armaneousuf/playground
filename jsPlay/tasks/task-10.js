console.log("1. Toast"); // runs immedietly because of sync

setTimeout(() => { // runs last because of macrotask
  console.log("2. Eggs");
}, 0);

Promise.resolve().then(() => { // microtask => higher priority than macrotask
  console.log("3. Coffee");
});

console.log("4. Milk"); // runs next after 1. Toast

// result: 1, 4, 3, 2