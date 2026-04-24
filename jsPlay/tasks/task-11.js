console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");