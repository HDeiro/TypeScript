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
var Book = (function () {
    function Book(name) {
        var _this = this;
        this.name = name;
        this.checkIn = function () {
            console.log("check in of " + _this.name + " book");
            return _this;
        };
        this.checkOut = function () {
            console.log("check out of " + _this.name + " book");
            return _this;
        };
    }
    return Book;
}());
var ChildBook = (function (_super) {
    __extends(ChildBook, _super);
    function ChildBook() {
        var _this = this;
        _super.apply(this, arguments);
        this.cleanTheMess = function () {
            console.log("cleaning the mess in the book " + _this.name);
            return _this;
        };
    }
    return ChildBook;
}(Book));
var childBook = new ChildBook("O pequeno príncipe");
childBook.checkOut().cleanTheMess().checkOut();
