var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Auto = (function () {
    function Auto(model) {
        var _this = this;
        this.model = model;
        this._isOn = false;
        this.turnOn = function () {
            if (!_this._isOn) {
                _this._isOn = true;
                return _this.model + ' is on now';
            }
            return _this.model + ' is already on';
        };
        this.turnOff = function () {
            if (_this._isOn) {
                _this._isOn = false;
                return _this.model + ' is off now';
            }
            return _this.model + ' is already off';
        };
    }
    return Auto;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(model, numberOfDoors) {
        var _this = this;
        _super.call(this, model);
        this.numberOfDoors = numberOfDoors;
        this.describe = function () { return 'The car model is ' + _this.model + ' and it have ' + _this.numberOfDoors + ' doors.'; };
    }
    return Car;
}(Auto));
var a = new Car('Ferrari', 4);
console.log(a.describe());
console.log(a.turnOn());
console.log(a.turnOn());
console.log(a.turnOff());
console.log(a.turnOff());
