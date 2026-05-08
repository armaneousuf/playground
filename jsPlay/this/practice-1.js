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

user.greet()