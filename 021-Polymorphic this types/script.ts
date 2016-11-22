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
 * 
 * A practical example could be the Library, when you have
 * such kinds of books that has different procedures for checkin
 * and checkout. For example, a ChildBook should be cleaned because
 * of the probabilty of some mess from cranyons, pencils and things like that.
 */

class Book {
    constructor(public name:string) {}

    checkIn = ():this => {
        console.log(`check in of ${this.name} book`);
        return this;
    }
    
    checkOut = ():this => {
        console.log(`check out of ${this.name} book`);
        return this;
    }
}

class ChildBook extends Book {
    cleanTheMess = ():this => {
        console.log(`cleaning the mess in the book ${this.name}`);
        return this;
    }
}

let childBook = new ChildBook("O pequeno príncipe");

//Using polymorphic this type you can build a fluent API that can chain method invocations
childBook.checkOut().cleanTheMess().checkOut();