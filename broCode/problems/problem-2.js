// Given an array of strings, return the longest one.

const stringArray = ["apple", "banana", "cherry", "date"];   

let longestStr = "";

for (let str of stringArray){
       if(str.length > longestStr.length){
        longestStr = str;
       } 
}

console.log(longestStr);