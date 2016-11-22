/**
 * A polymorphic this type represents a type that is the
 * subtype of the containing class or interface.
 *          - TypeScript Handbook
 *
 * That means: you can define a base class that returns it's
 * own referenc but, depending on context the type can vary
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle() {
    }
    Vehicle.prototype.Drive = function () {
        return this;
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        _super.apply(this, arguments);
    }
    return Car;
}(Vehicle));
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        _super.apply(this, arguments);
    }
    return Truck;
}(Vehicle));
var vehicle = new Vehicle();
var car = new Car();
var truck = new Truck();
console.log(vehicle.Drive().constructor);
console.log(car.Drive().constructor);
console.log(truck.Drive().constructor);
