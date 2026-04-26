const cart = [
  { name: "Laptop", price: 1000, category: "tech" },
  { name: "Shampoo", price: 10, category: "health" },
  { name: "Headphones", price: 100, category: "tech" },
  { name: "Apple", price: 2, category: "food" },
  { name: "Monitor", price: 300, category: "tech" },
];

const output = cart
  .filter((x) => x.category === "tech")
  .map((x) => x.price * 0.8)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);
console.log(output);
