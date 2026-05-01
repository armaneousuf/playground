// Write your own myFilter(arr, callback) the same way.

function myFilter(arr, callback){
    const result = []; 
    for (let item of arr){
       if(callback(item)){
        result.push(item)
       }
    }
    return result;
}

function isGreaterThanTwo(n){
    return n > 2;
}

console.log(myFilter([1, 2, 3, 4, 5], isGreaterThanTwo))