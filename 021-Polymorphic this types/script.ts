/**
 * A polymorphic this type represents a type that is the 
 * subtype of the containing class or interface.
 *          - TypeScript Handbook
 * 
 * That means: you can define a base class that returns it's
 * own referenc but, depending on context the type can vary 
 */

class Vehicle {
    Drive() {
        return this;
    }
}

class Car extends Vehicle {}
class Truck extends Vehicle {}

let vehicle = new Vehicle();
let car = new Car();
let truck = new Truck();

//"This", for vehicle, represents a Vehicle instance
console.log(vehicle.Drive().constructor); 

//"This", for car, represents a Car instance
console.log(car.Drive().constructor);

//"This", for truck, represents a Truck instance
console.log(truck.Drive().constructor);

/**
 * That concludes, the "this" is relative to the context
 */