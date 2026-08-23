let arg = prompt("Enter a value?");
switch (arg) {
  case '0': // grouping 
  case '1':
    alert( 'One or zero' );
    break;

  case '2': // executes
    alert( 'Two' );
    break;

  case 3: // why it never executes and runs default alert?
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}