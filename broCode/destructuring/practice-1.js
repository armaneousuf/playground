let a = 1;
let b = 2;

[a, b] = [b, a]
console.log(a, b);


const {title, director, rating = 5} = {title: "Inception", director: "Christopher Nolan"}
console.log(title);  
console.log(rating);