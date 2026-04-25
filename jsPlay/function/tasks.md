### 1. The Basic Declaration
Create a **Function Declaration** called `greetUser` that takes a `name` as a parameter and returns the string: `"Hello, [name]!"`. Call the function with your name and `console.log` the result.

---

### 2. The Arrow Conversion
Take the following function and convert it into a **one-line Arrow Function**:
```javascript
function square(number) {
  return number * number;
}
```

---

### 3. The Exit Door (`return`)
Look at this code. What will be the output in the console, and **why**?
```javascript
function checkMagicNumber(n) {
  if (n === 7) {
    return "Magic!";
  }
  return "Not magic";
  console.log("Check complete!"); 
}

console.log(checkMagicNumber(7));
```

---

### 4. Multiple Parameters
Write a function `calculateArea` that takes `width` and `height`. If the `height` is missing (undefined), the function should assume the shape is a square and use the `width` for both dimensions. 
*(Hint: You can use a default parameter or an `if` statement).*

---

### 5. Function Expressions
Create a **Function Expression** (assigning a function to a `const`) called `isAdult`. It should take an `age` and return `true` if the age is 18 or above, and `false` otherwise.

---

### 6. The Call Stack Trace
Look at this nested code. List the order in which these functions are **Popped Off** the Call Stack:
```javascript
function getIceCream() {
  return "Ice Cream";
}

function getDessert() {
  return getIceCream();
}

function eat() {
  const meal = getDessert();
  console.log(meal);
}

eat();
```

---

### 7. Logical Input (The Modulo)
Write a function `isOdd` that returns `true` if a number is odd and `false` if it is even. Use an **Arrow Function**.

---

### 8. Functions as Arguments (Callbacks)
This is a "Bridge" task to your Event Loop knowledge. 
Write a function called `runTwice` that takes another **function** as an argument and executes that function two times.

---

### 9. The "Hoisting" Test
Will this code work? Explain your answer based on the difference between **Declarations** and **Expressions**.
```javascript
console.log(subtract(10, 5));

function subtract(a, b) {
  return a - b;
}

console.log(divide(10, 2));

const divide = (a, b) => a / b;
```

---

### 10. The Real-World Challenge
Write a function called `formatPrice` that takes a `number`. 
1. It should add a `$` sign to the front.
2. It should ensure there are always 2 decimal places (Hint: look up the `.toFixed(2)` method).
3. Example: `formatPrice(2.5)` should return `"$2.50"`.

---

**Show me your answers whenever you are ready!** I’m looking for clear logic and correct use of the `return` keyword.