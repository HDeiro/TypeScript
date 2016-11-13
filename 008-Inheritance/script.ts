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
    constructor(model:string, public numberOfDoors:number) {
        super(model);
    }

    describe = ():string => 'The car model is ' + this.model + ' and it have ' + this.numberOfDoors + ' doors.';
}

var a = new Car('Ferrari', 4);
console.log(a.describe());
console.log(a.turnOn());
console.log(a.turnOn());
console.log(a.turnOff());
console.log(a.turnOff());