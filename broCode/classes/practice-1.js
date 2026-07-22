class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Fish extends Animal {
    constructor(name, age, swimSpeed) {
      super(name, age)
    this.swimSpeed = swimSpeed;
}
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age)
    this.runSpeed = runSpeed;
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age)
    this.flySpeed = flySpeed;
  }
}

const fish = new Fish('Fish', 2, 10);
const rabbit = new Rabbit('Rabbit', 1, 25);
const hawk = new Hawk('Hawk', 3, 50);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
