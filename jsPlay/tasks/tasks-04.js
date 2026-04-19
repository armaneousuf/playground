// What will each line log? And why does b() behave differently than a()?
function make() {
    var count = 0;

    return function() {
        count++;
        return count;
    }
}

var a = make();
var b = make();

console.log(a()); // increment +1
console.log(a()); // increment +1 and sums to the previous one so it makes two
console.log(b()); // it is a new one so it starts from the beginning. which increment +1