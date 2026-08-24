function printFarmInventory(cows, chickens){
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
}

printFarmInventory(7, 11)