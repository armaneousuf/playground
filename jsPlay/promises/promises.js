const promise = new Promise((resolve, reject) => {
    const name = 'Yousuf';
    if(name){
        resolve(name)
    } else {
        reject("error occured")
    }
});

promise.then((value) => {
    console.log(value);
}) 
.catch((error) => {
    console.log(error)
})

