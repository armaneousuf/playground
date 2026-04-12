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
      getResult()
    })
})

function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * btns.length);
    // console.log(randomNumber)

    computerChoice.textContent = btns[randomNumber].textContent

}

function getResult () {
 if (computerChoice.textContent === userChoice.textContent){
    result.textContent = "Tied";
 } 
  else if (computerChoice.textContent === 'Rock' && userChoice.textContent === 'Scissors') {
    result.textContent = 'You lose'  
 } 
 else if (computerChoice.textContent === 'Scissors' && userChoice.textContent === 'Paper') {
    result.textContent = 'You lose';
 } 
 else if (computerChoice.textContent === 'Paper' && userChoice.textContent === 'Rock'){
    result.textContent = 'You lose'
 } else {
    result.textContent = 'You Win'
 }
}