/**
 * Type Guards are used to ensure the type of variables 
 * in operations.
 * 
 * There's some ways to do it. One of that is using TypeOf Type
 * Guards. It compares the typeof operator to a type name. It's 
 * possible to use just to know if the object is or isn't of an
 * specific type (that may only be String, Number, Boolean or Symbol)
 */
let myVar : string | number = 123;

if(typeof myVar === 'string') {
    //Do string stuff
} else {
    //Do number stuff
}

/**
 * InstanceOf Type Guards do this comparations
 * considering the class of the constructor's object
 */

class Dog {
    bark = ():string => 'Woof';
}

class Cat {
    meowth = ():string => 'Meowth';
}

let pet: Dog | Cat = new Cat();

if(pet instanceof Dog)
    pet.bark();
else
    pet.meowth();

/**
 * User defined type guards give the hability to check
 * other types that doesn't need to have a constructor
 */

interface Vehicle {
    numberOfWheels:number;
}

class Car implements Vehicle {
    constructor(public numberOfWheels:number) {}
}

function isVehicle(v:any): v is Vehicle {
    return (<Vehicle> v).numberOfWheels !== undefined;
}

let c = new Car(4);
if(isVehicle(c)) {
    console.log("It's a vehicle!");
} else {
    console.log("It isn't a vehicle!");
}

if(isVehicle(10)) {
    console.log("It's a vehicle!");
} else {
    console.log("It isn't a vehicle!");
}