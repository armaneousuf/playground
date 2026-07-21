// Imagine you’re building a tiny feature for a restaurant app.
// You are given a list of meal prices for a table of friends. You need to:
// Add up the total cost of all meals.
// Add a 10% tip to that total.
// If the final total (with tip) is over $100, apply a $15 discount.
// Return the final amount the group needs to pay.

// 1. find the sum of the mealPrice array prices
// 2. add 10% of the total
// 3. add conditional on total and filter if it matches the requirements
// 4. return it
// const mealPrices = [18, 35, 22, 28];
const mealPrices = [300, 200]

let total = 0; 

for (const price of mealPrices){
    total += price;
}

const tip = total * .10;
total += tip;

if(total > 100){
    const discount = 15;
    total -= discount
}

console.log(total);