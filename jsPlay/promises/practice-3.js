const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Yousuf', 
            age: 25
        })
    }, 2000)
});

getUser
    .then((user) => {
        console.log(user);
        return user.name;
    }) 
    .then((name) => {
        console.log(name);
        return name.toUpperCase();
    })
    .then((shouted) => {
        console.log(shouted);
    })
    .catch((error) => {
        console.log(error)
    })