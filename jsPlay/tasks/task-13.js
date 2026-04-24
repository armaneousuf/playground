console.log("1"); // sync

setTimeout(() => { // goes to the queue
  console.log("2"); // runs immedietly
  Promise.resolve().then(() => { // higher priority so it runs as well
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => { // Higher priority
  console.log("4"); // runs immedietly
  setTimeout(() => { // waits for callstack to empty because of being macrotask
    console.log("5");
  }, 0);
});

setTimeout(() => { // runs before nested macrotask
  console.log("6");
}, 0);

console.log("7"); // sync

// Output: 1 -> 7 -> 4 -> 2 -> 3 -> 6 -> 5