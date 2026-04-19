// What logs and why?
function greet(name) {
    return function() {
        console.log("Salam " + name);
    }
}

var greetYousuf = greet("Yousuf");
var greetAli = greet("Ali");

greetYousuf(); // log salam yousuf first
greetAli(); // log salam ali then 