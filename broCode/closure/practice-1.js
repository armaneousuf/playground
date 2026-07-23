function createBankAccount(initialBalance){
    let balance = initialBalance;

    return{
        deposite: function(amount){
            balance += amount; 
            return balance;
        },

        getBalance: function(){
            return `Your balance is ${balance}`;
        }
    }
}

const myAccount = createBankAccount(100);
console.log(myAccount.getBalance());
console.log(myAccount.deposite(50));
console.log(myAccount.getBalance());