const user = {
    name: 'Bob', 
    greet: function() {
        setTimeout(() => {
            console.log(this.name)
        }, 1000);
    }
}

user.greet()