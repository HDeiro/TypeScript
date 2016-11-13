/**
 * In typescript we can define new classes, that contains the
 * generic representation of something wich can be a Document, a Person
 * a car. Basically, anything.
 */

class Engine {
    //It's possible to define properties through the constructor using this syntax
    //For example, isn't necessary to set this.description = description, because 
    //public description:string at constructor actually do this work
    constructor(public description:string, public horsesPower:number) {}

    //some function to describe the engine
    describeEngine = ():string => this.description + ' (' + this.horsesPower + 'cv)';
}

class Car {
    //Declaration of private property, that's is only visible in 
    //class scope
    private _engine:Engine;

    //Declaration of constructor, that contains two properties (mode:string, year:number)
    //and the engine:Engine wich will be setted through set engine
    constructor(public model:string, public year:number, engine:Engine) {
        this.engine = engine;
    }

    /**************************************
     **************************************
     * IMPORTANT!
     * 
     * This get/set acessors are converted to EcmaScript 5+. By default, TS try 
     * compile to ES3, because of the old browsers (dammit, IE!). So, to compile 
     * this code you will need to use:
     * 
     * "tsc script.js --target es5"
     *************************************
     **************************************/

    //The getter of an engine property (wich returns the private engine instance)
    get engine():Engine {
        return this._engine;
    }

    //The setter of an engine. It trows an exception if the engine is undefined
    set engine(engine:Engine) {
        if(engine === undefined)
            throw('Please, provide a engine');
        this._engine = engine;
    }

    //Some function to present all properties
    describeYourself = ():string => {
        return this.model + ' ('  + this.year + ') with an engine ' + this.engine.describeEngine();
    }
}

//Declarations
var engine = new Engine('V8', 800);
var car1 = new Car('Lamborghini', 2016, engine);

console.log(car1.describeYourself());