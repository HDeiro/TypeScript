/**
 * In typescript we can define new classes, that contains the
 * generic representation of something wich can be a Document, a Person
 * a car. Basically, anything.
 */
var Engine = (function () {
    //It's possible to define properties through the constructor using this syntax
    //For example, isn't necessary to set this.description = description, because 
    //public description:string at constructor actually do this work
    function Engine(description, horsesPower) {
        var _this = this;
        this.description = description;
        this.horsesPower = horsesPower;
        //some function to describe the engine
        this.describeEngine = function () { return _this.description + ' (' + _this.horsesPower + 'cv)'; };
    }
    return Engine;
}());
var Car = (function () {
    //Declaration of constructor, that contains two properties (mode:string, year:number)
    //and the engine:Engine wich will be setted through set engine
    function Car(model, year, engine) {
        var _this = this;
        this.model = model;
        this.year = year;
        //Some function to present all properties
        this.describeYourself = function () {
            return _this.model + ' (' + _this.year + ') with an engine ' + _this.engine.describeEngine();
        };
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        //The getter of an engine property (wich returns the private engine instance)
        get: function () {
            return this._engine;
        },
        //The setter of an engine. It trows an exception if the engine is undefined
        set: function (engine) {
            if (engine === undefined)
                throw ('Please, provide a engine');
            this._engine = engine;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
//Declarations
var engine = new Engine('V8', 800);
var car1 = new Car('Lamborghini', 2016, engine);
console.log(car1.describeYourself());
