// Write three separate functions: add10(num), double(num), square(num). Write a transform(arr, ...callbacks) function that runs each callback one after another on the array using reduce.

function add10(num){
    return num + 10;
}

function double(num){
    return num * 2;
}

function square(num){
    return num * num;
}

function transform(arr, ...callbacks){

}

transform([1,2,3], add10, double, square)


