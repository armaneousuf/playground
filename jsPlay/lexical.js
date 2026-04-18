// var x = "Global";

// function a(){
//     console.log(x);
// };

// function b(){
//     var x = "inside b";
//     a()
// }

// b();


let a = "Global";
function level1(){
    let b = "level 1";

    function level2() {
        let c = "level 2";
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
    }
    level2()
}
level1()