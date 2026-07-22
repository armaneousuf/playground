class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    startEngine(){
        return `The ${this.make} ${this.model}'s engine is running!`;
    }

    fly() {
        return `The ${this.make} ${this.model} is flying at ${this.maxAltitude} feet!`
    }
    
}

class Car extends Vehicle {
    constructor(make, model, numDoors){
        super(make, model);
        this.numDoors = numDoors;
    }
}

class Plane extends Vehicle {
    constructor(make, model, maxAltitude) {
        super(make, model);
        this.maxAltitude = maxAltitude;
    }

    
}

const car = new Car ('Toyota', 'Corolla', 4);
const plane = new Plane('Boeing', 747, 34000);

// console.log(car);
// console.log(car.make);
// console.log(car.model);
// console.log(car.numDoors);
// console.log(plane);
// console.log(plane.make);
// console.log(plane.model);
// console.log(plane.maxAltitude);

console.log(car.startEngine());
console.log(plane.startEngine());
console.log(plane.fly());