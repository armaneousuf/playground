var x = "Global";

function a(){
    console.log(x);
};

function b(){
    var x = "inside b";
    a()
}

b();