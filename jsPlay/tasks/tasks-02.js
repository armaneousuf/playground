// Create a variable outside any function. Access it from inside a function without passing it as a parameter. See if it works and explain to yourself why it worked.

var name = 'You can access me';

function total(){
    var x = 10;
    console.log(name) // name is accessible because the total() block has no such thing like `name` so it goes up like a bubble and logs whatever matches it's value
}

total()

