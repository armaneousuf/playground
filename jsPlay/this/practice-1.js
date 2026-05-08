// function greet(){
//     console.log(this)
// }

// greet()

const user = {
    name: 'Yousuf',
    greet() {
        console.log(this.name)
    }
}

// this.greet() this won't work 
user. greet()

// console.log(typeof(this))