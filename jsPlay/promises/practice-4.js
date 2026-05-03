const getProfile = new Promise((resolve, reject) => {
    const success = true;
    if(success){
        setTimeout(() => {
            resolve({name: 'Yousuf', age: 25})
        }, 2000);
    } else {
        reject('Promise failed somehow')
    }
});

const getPosts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Post 1: Hello world', 'Post 2: Learning promises'])
    }, 2000);
});

console.log('loading data');

Promise.all([getProfile, getPosts])
.then((result) => {
    console.log('Everything loaded')

    const profile = result[0];
    const posts = result[1];

    console.log('profile', profile);
    console.log('posts', posts);
})
.catch((error) => {
    console.log('Something failed', error);
});