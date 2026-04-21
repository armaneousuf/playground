function greet(name, callback){
    name()
    callback();
};

greet(()=>{console.log('Hi, My name is Yousuf Arman')}, ()=>{console.log('I am callback')});

// const greet = ()=> {console.log('Hi')}
// console.log(greet())