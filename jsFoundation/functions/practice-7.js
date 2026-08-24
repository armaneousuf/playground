function findMin(){
    const arrOfNumbers = [2, 3, 4, 1, 10, 22, 55];
    const min = Math.min(...arrOfNumbers);
    return min;
}

console.log(findMin());