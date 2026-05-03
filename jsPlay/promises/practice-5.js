const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({name: 'Yousuf'})
        reject('get user also crashes')
    }, 5000);
})

const getOrders = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(['order 1', 'order 2'])
        reject('Opps! get orders crashes')
    }, 2000);
})

const getNotifications = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(['notif 1', 'notif 2'])
        reject('oops! something is wrong')
    }, 3000);
})

Promise.any([getUser, getOrders, getNotifications])
.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
})