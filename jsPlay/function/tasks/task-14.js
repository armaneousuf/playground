// Filter people 18 or older, then use map to transform each into a greeting string like "Hello, Yousuf!", then use reduce to join them all into one single string separated by a space. Expected output:

const people = [
  { name: 'Yousuf', age: 25 },
  { name: 'Ali', age: 17 },
  { name: 'Sara', age: 30 },
  { name: 'Rafi', age: 15 },
];

const output = people.filter(n => n.age >= 18)
.map(n => `Hello, ${n.name}! `)
.reduce((acc, curr) => acc + ' ' + curr, "").trim();
console.log(output)