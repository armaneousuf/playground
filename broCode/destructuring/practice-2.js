const person = {
  fullName: "Sarah Conor",
  role: "Defender",
};

const { fullName: name, role } = person;

console.log(name);


function displayScore({name, score}) {
  console.log(`${name} scored ${score} points!`);
}

displayScore({ name: "Alex", score: 95 });
