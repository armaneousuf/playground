const computerChoice = document.querySelector("#computer-choice");
const userChoice = document.querySelector("#user-choice");
const result = document.querySelector("#result");

// console.log(computerChoice, userChoice, result)

const btns = document.querySelectorAll(".btns button");
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(btn, e)
    userChoice.textContent = e.target.textContent;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * btns.length);
  // console.log(randomNumber)

  computerChoice.textContent = btns[randomNumber].textContent;
}

function getResult() {
  const computer = computerChoice.textContent;
  const user = userChoice.textContent;

  if (computer === user) {
    result.textContent = "It's a Tie! 🤝";
  } else if (
    (computer === "Rock" && user === "Scissors") ||
    (computer === "Scissors" && user === "Paper") ||
    (computer === "Paper" && user === "Rock")
  ) {
    result.textContent = "You lose! 💀";
  } else {
    result.textContent = "You Win! 🏆";
  }
}
