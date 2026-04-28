const people = [
  { name: 'Yousuf', age: 25 },
  { name: 'Ali', age: 17 },
  { name: 'Sara', age: 30 },
  { name: 'Rafi', age: 15 },
];

const result = people.filter(n => n.age >= 18)
.map(n => n.name);
console.log(result)
