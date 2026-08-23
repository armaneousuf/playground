let a = 3;

switch (a) {
  case 4:
    console.log("Right");
    break;

  case 3:
  case 5:
    console.log("Wrong!");
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log("The result is strange. Really.");
}
