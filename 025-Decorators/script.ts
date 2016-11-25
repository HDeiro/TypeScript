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
function sealed(target:Function):void {
    console.log('Sealing the class constructor');
    Object.seal(target);
    Object.seal(target.prototype);
}

//Factory Decorator (Receive one parameter)
function sealedFactory(name:string) {
    return function sealed(target:Function):void {
        console.log('Sealing the class constructor ' + name);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

//Override Decorator 
function logger<TFunction extends Function>(target:TFunction):TFunction {
    let newConstructor:Function = function() {
        console.log('Creating new Instance through the decorator');
        console.log(target);
    }

    //Override proccess
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;

    return <TFunction> newConstructor; 
}

@logger
class MyClass {
    constructor() {
        console.log('MyClass Constructor');
    }
    @readonly
    sayHello = ():void => console.log('Hello');
}

/**
 * - Property Decorators
 * 
 * Took two parameters, the first is either constructor function
 * or class prototype. The second is the name of decorated member.
 * 
 *  - Parameter Decorators
 * 
 * Took three parameters, the first is either constructor function or class prototype.
 * The second is the name of decorated member and the third one is the ordinal index 
 * of the decorated parameter.
 */

/**
 * There are some property descriptors that defines some configurations
 * about the properties of a class or interface.
 * 
 *  - value: specifies if the property contains the function definition for class methods;
 *  - writable: property specifies if "value" is read-only
 */

interface PropertyDescriptor {
    configurable?:boolean;
    enumerable?:boolean;
    value?:any;
    writable?:boolean;
    get?():any;
    set?(v:any):void;
}

function readonly(target:Object, 
                propertyKey:string, 
                descriptor:PropertyDescriptor) {
    console.log('Setting '+propertyKey+' to read-only');
    descriptor.writable = false;
}

class MyOtherClass {
    constructor() {
        console.log('MyOtherClass Constructor');
    }
    @readonly
    sayHello = ():void => console.log('Hello');
}