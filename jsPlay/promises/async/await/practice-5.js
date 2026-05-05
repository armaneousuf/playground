const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise will be resolved')
    }, 5000);
});

async function myfunc() {
    const value = await p;
    console.log('This is a log');
    console.log(value)
};

myfunc()