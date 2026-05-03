const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = {name: 'Yousuf', age: 25};
        resolve(user);
    }, 5000);
});

getUser.then((user) => {
    console.log(user)
})

// let user; 
// setTimeout(() => {
//     user = {name: 'Yousuf', age: 25}
// }, 5000);

// console.log(user)