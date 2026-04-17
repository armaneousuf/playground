// console.log(name);
// var name = "Yousuf";
// console.log(name)

/*
let x = 1;

{
    console.log(x); 
    let x = 2;
}

console.log(x); // reads x → prints undefined (declaration was hoisted)
var x = 5;      // assigns 5 to x (not "reads")
console.log(x); // reads x → prints 5
x = 10;         // reassigns x to 10 (not "reads")
console.log(x); // reads x → prints 10 */


var x = 1; 
a();
b();
console.log(x)

function a() {
    var x = 10;
    console.log(x)
}

function b(){
    var x = 100;
    console.log(x)
}

function greet() {
    sayHello();
    console.log("Greet function finished");
}

function sayHello() {
    console.log("Hello!");
}

greet();
