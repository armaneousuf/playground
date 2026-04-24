console.log("A");

setTimeout(() => { // this is a macrotask
  console.log("B");
}, 0);

Promise.resolve() // microtask with VIP
  .then(() => {
    console.log("C");
  })
  .then(() => {
    console.log("D");
  });

console.log("E");

// Output: A -> E -> C -> D -> B