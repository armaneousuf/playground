console.log("Start"); // runs immedietly

setTimeout(() => {
  console.log("Timeout 1"); // this console will run 3rd
  Promise.resolve().then(() => {
    console.log("Promise inside Timeout"); // 4th
  });
}, 0);

setTimeout(() => { // 5th
  console.log("Timeout 2");
}, 0);

console.log("End"); // runs next 

// output: start, end, timeout 1, promise inside timeout, timeout 2