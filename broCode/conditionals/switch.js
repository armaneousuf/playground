const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

let day = 1;

switch (day) {
  case 1:
    console.log(`Today is ${days[day - 1]}`);
    break;
  case 2:
    console.log(`Today is ${days[day - 1]}`); 
    break;
  case 3:
    console.log(`Today is ${days[day - 1]}`);
    break;
  case 4:
    console.log(`Today is ${days[day - 1]}`);
    break;
  case 5:
    console.log(`Today is ${days[day - 1]}`);
    break;
  case 6:
    console.log(`Today is ${days[day - 1]}`);
    break;
  case 7:
    console.log(`Today is ${days[day - 1]}`);
    break;

  default:
    console.log(`${day} is not a day`);
}
