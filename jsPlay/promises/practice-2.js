const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
        if(success){
            resolve({name: 'Arman', age: 25})
        } else {
            reject('network error. could not fetch user')
        }
    }, 3000);
});

getUser.then((value) => console.log(value))
.catch((error) => console.log(error))