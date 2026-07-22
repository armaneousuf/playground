# The Challenge: Build a Vehicle Hierarchy 🚗✈️

Imagine you are making a simple game or app that tracks different types of vehicles.

## Requirements

### 1. Create a base class called `Vehicle`

- It should take two parameters in its constructor:
  - `make`
  - `model`
- Save them as properties:
  - `this.make`
  - `this.model`

### 2. Create a subclass called `Car` that extends `Vehicle`

- Its constructor should take:
  - `make`
  - `model`
  - `numDoors`
- Use `super()` to pass `make` and `model` to the `Vehicle` constructor.
- Save `numDoors` as:
  - `this.numDoors`

### 3. Create a subclass called `Plane` that extends `Vehicle`

- Its constructor should take:
  - `make`
  - `model`
  - `maxAltitude`
- Use `super()` to pass `make` and `model` to the `Vehicle` constructor.
- Save `maxAltitude` as:
  - `this.maxAltitude`

## Instantiate and Test

Create the following objects:

- A `Car` object
  - Make: `Toyota`
  - Model: `Corolla`
  - Doors: `4`

- A `Plane` object
  - Make: `Boeing`
  - Model: `747`
  - Maximum Altitude: `35000` ft

Finally, use `console.log()` to display the properties of both objects and verify that everything works correctly.

// ======================= Additional Challenges ========================= //

The Challenge: Adding Actions 🔑
Take your code from before and make two small updates:

Add a method inside Vehicle:

Inside class Vehicle, right below the constructor, create a method named startEngine().

It doesn't take parameters, it just returns or logs a message using its properties:
return "The " + this.make + " " + this.model + "'s engine is running!"; (or use template literals: `The ${this.make} ${this.model}'s engine is running!`)

Add a custom method inside Plane:

Inside class Plane, add a unique method called fly().

Have it return: `The ${this.make} ${this.model} is flying at ${this.maxAltitude} feet!`

Test it out:

Call car.startEngine() and log the result.

Call plane.startEngine() and log the result (Notice how plane gets this method automatically from Vehicle!).

Call plane.fly() and log the result.
