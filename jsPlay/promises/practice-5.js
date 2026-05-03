const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'Yousuf'})
    }, 5000);
})

const getOrders = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['order 1', 'order 2'])
    }, 2000);
})

const getNotifications = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(['notif 1', 'notif 2'])
        reject('oops! something is wrong')
    }, 3000);
})

Promise.allSettled([getUser, getOrders, getNotifications])
.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
})