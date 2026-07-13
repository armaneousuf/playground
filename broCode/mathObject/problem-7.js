// Average without reduce — Write average(...nums) that computes the average of any number of arguments using Math.min/Math.max... actually scratch that, just use it to also return { avg, min, max } in one pass using Math methods.

function average(...nums){
    let sum = 0;
    for (const number of nums){
        // console.log(number);
        sum += number
    } 
    const avg = sum / nums.length;
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    return {
        avg,
        min,
        max
    }


}

console.log(average(...[10, 20, 30, 40, 50]));