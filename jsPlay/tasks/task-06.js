// What logs on each fn() call?
function outer() {
    var x = 10;

    return function() {
        x++;
        console.log(x);
    }
}

var fn = outer();
fn(); // 11
fn(); // 12
fn(); // 13 

// each will increment +1 after it's own variable (x)