console.log("1. Start");  

setTimeout(() => { 
  console.log("2. Timer 1"); 
  Promise.resolve().then(() => {
    console.log("3. Micro inside Timer 1"); 
  });
}, 0);

new Promise((resolve) => { 
  console.log("4. Promise Executor");
  resolve();
}).then(() => {
  console.log("5. Promise Then 1"); 
  Promise.resolve().then(() => {
    console.log("6. Micro inside Promise Then 1");
  });
});

setTimeout(() => {
  console.log("7. Timer 2");
}, 0);

console.log("8. End")