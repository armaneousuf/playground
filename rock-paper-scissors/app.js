const computerChoice = document.querySelector('#computer-choice');
const userChoice = document.querySelector('#user-choice');
const result = document.querySelector('#result');

// console.log(computerChoice, userChoice, result)


const btns = document.querySelectorAll('.btns button');
btns.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
        // console.log(btn, e)
        userChoice.textContent = e.target.textContent;
      generateComputerChoice()
    })
})

function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * btns.length);
    // console.log(randomNumber)

    computerChoice.textContent = btns[randomNumber].textContent

}
