function printFarmInventory(cows, chickens, pigs){
    let cowString = String(cows).padStart(3, '0');
    // while(cowString.length < 3){
    //     cowString = "0" + cowString;
    // }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens).padStart(3, '0');
    // while(chickenString.length < 3){
    //     chickenString = "0" + chickenString;
    // }
    console.log(`${chickenString} Chickens`);

    let pigString = String(pigs).padStart(3, '0')
    console.log(`${pigString} Pigs`);
}

printFarmInventory(7, 11, 3)