/**
 * It's possible to create inheritance relations 
 * with Typescript using the keyword extends
 */

class Auto {
    private _isOn = false;

    constructor(protected model:string) {}

    turnOn = ():string => {
        if(! this._isOn) {
            this._isOn = true;
            return this.model + ' is on now';
        }
        
        return this.model + ' is already on';
    }

    turnOff = ():string => {
        if(this._isOn) {
            this._isOn = false;
            return this.model + ' is off now';
        }

        return this.model + ' is already off';
    }
}

class Car extends Auto {
    private accessories : Accessory[];

    constructor(model:string, public numberOfDoors:number) {
        super(model);
        this.accessories = [];
    }

    describe = ():string => 'The car model is ' + this.model + ' and it have ' 
        + this.numberOfDoors + ' doors and ' 
        + this.accessories.length + ' accessories';
    
    //It's possible to define a way to pass X parameters (when you don't know the quantity)
    //using ... notation before the name of the parameter. It will be get as an array.
    //In that example, i pass through the parameter array and push each element in acessories array.
    addAcessory = (...acessories:Accessory[]):void => acessories.forEach((element) => {
        this.accessories.push(element);
    });
}

class Accessory {
    constructor(public name:string) {}
}

//Execution
var a = new Car('Ferrari', 4);
a.addAcessory(new Accessory('Sound'), new Accessory('Xeon'));
a.addAcessory(new Accessory('Something'));
console.log(a.describe());
console.log(a.turnOn());
console.log(a.turnOn());
console.log(a.turnOff());
console.log(a.turnOff());