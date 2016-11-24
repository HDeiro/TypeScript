/**
 * Type Guards are used to ensure the type of variables
 * in operations.
 *
 * There's some ways to do it. One of that is using TypeOf Type
 * Guards. It compares the typeof operator to a type name. It's
 * possible to use just to know if the object is or isn't of an
 * specific type (that may only be String, Number, Boolean or Symbol)
 */
var myVar = 123;
if (typeof myVar === 'string') {
}
else {
}
/**
 * InstanceOf Type Guards do this comparations
 * considering the class of the constructor's object
 */
var Dog = (function () {
    function Dog() {
        this.bark = function () { return 'Woof'; };
    }
    return Dog;
}());
var Cat = (function () {
    function Cat() {
        this.meowth = function () { return 'Meowth'; };
    }
    return Cat;
}());
var pet = new Cat();
if (pet instanceof Dog)
    pet.bark();
else
    pet.meowth();
var Car = (function () {
    function Car(numberOfWheels) {
        this.numberOfWheels = numberOfWheels;
    }
    return Car;
}());
function isVehicle(v) {
    return v.numberOfWheels !== undefined;
}
var c = new Car(4);
if (isVehicle(c)) {
    console.log("It's a car!");
}
else {
    console.log("It isn't a car!");
}
if (isVehicle(10)) {
    console.log("It's a car!");
}
else {
    console.log("It isn't a car!");
}
