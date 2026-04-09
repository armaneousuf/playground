const card = document.querySelectorAll('.card *');
// console.log(card)
Array.from(card).forEach((c) =>{
    // console.log(c)
})

// Task 1 — Select the <h1> and change its text to your name.

const heading = document.querySelector('h1');
console.log(heading);
heading.textContent = 'Arman Eousuf';

// Task 2 — Select all .intro paragraphs and add "→ " before each one's text.

const intro = document.querySelectorAll('.intro');
console.log(intro);

intro.forEach(i => {
    // console.log(i)
    i.textContent = '→ ' + i.textContent;
})

// Task 3 — Select #special and change its color to red.
const special = document.querySelector('#special');
// console.log(special)
special.style.color = 'red';

// Task 4 — Select only the <button> inside .card and change its text to "Learn More".
const btn = document.querySelector('.card button');
// console.log(btn)
btn.textContent = 'Learn more';

// Task 5 — Select the email input and give it a background color.
const email = document.querySelector("input[type='email']");
// console.log(email)
email.style.backgroundColor = 'lightGray';

// Task 6 — Select .box.highlight and change its text to "I have two classes!".
const classes = document.querySelector('.box.highlight');
// console.log(classes)
classes.textContent = 'I have two classes!';

// Task 7 — Log how many .intro paragraphs exist on the page.
const length = document.querySelectorAll('.intro');
console.log(length.length) // why querySelector didn't work but qsa works? 