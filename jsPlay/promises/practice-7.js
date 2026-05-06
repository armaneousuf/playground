const promise = new Promise((resolve, reject) => {
    const random = Math.random();
    if(random > 0.5){
        resolve(`Success! Random was ${random}`)
    } else{
        reject('Something went wrong')
    }
});

promise.then(
    value => console.log(value), 
    error => console.log(error)
) 