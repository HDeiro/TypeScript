/**
 * Decorators allow you to append behaviors to
 * a code that originally will execute it's custom
 * behavior.
 *
 * It's like a cake that has a chocolate over it. It
 * stills a cake, but a cake covered with chocolate.
 *
 * It's a proposed feature for JavaScript, that works
 * with declarative programming implemented as functions
 * that can be attached to classes, methods, accessors, properties
 * and parameters.
 *
 * In typescript it currently requires a compiler option called
 * experimentalDecorators.
 *
 *  ex: tsc script.ts --experimentalDecorators
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Class Decorators will be passed as parameters to decorator and
 * the constructor of the class is replaced if there's a return value.
 *
 * Ex:
 *      <ClassType extends Function>(target:ClassType) => ClassType | void;
 *
 *      This example means if the class constructor matchs ClassType, it's going to be
 *      overrided. If don't, the decorator will be void and the constructor will execute
 *      normally.
 */
//Class decorator -> One Function Parameter.
//Because it's void, the content of the constructor is not replaced by the decorator
function sealed(target) {
    console.log('Sealing the class constructor');
    Object.seal(target);
    Object.seal(target.prototype);
}
//Factory Decorator (Receive one parameter)
function sealedFactory(name) {
    return function sealed(target) {
        console.log('Sealing the class constructor ' + name);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
//Override Decorator 
function logger(target) {
    var newConstructor = function () {
        console.log('Creating new Instance through the decorator');
        console.log(target);
    };
    //Override proccess
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return newConstructor;
}
var MyClass = (function () {
    function MyClass() {
        this.sayHello = function () { return console.log('Hello'); };
        console.log('MyClass Constructor');
    }
    __decorate([
        readonly
    ], MyClass.prototype, "sayHello");
    MyClass = __decorate([
        logger
    ], MyClass);
    return MyClass;
}());
function readonly(target, propertyKey, descriptor) {
    console.log('Setting ' + propertyKey + ' to readonly');
}
