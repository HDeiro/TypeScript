/**
 * Generics is a code designed to work with multiple types
 * instead of one single tipe. It's really useful when you
 * want to do something that would be used by all the classes
 * in your system.
 * 
 * Generic Functions receive an generic type T (the conventional acronimn to "type")
 * as parameters and works through it. For example:
 * 
 * function doSomething(param:Array<T>) {}
 * 
 * This function "doSomething" can be executed several times and each member of param
 * can by of a diferent type.
 */

//FIRST EXAMPLE 
class Class1 {
    constructor(public param:string){} 
    execute = ():string => 'Class 1';
}

class Class2 {
    constructor(public param:string){} 
    execute = ():string => 'Class 2';
}

function doThing<T>(thing: T):void {
    if(thing instanceof Class1) {
        console.log(thing.execute());
    } 
    
    if(thing instanceof Class2) {
        console.log(thing.execute());
    }
}

//I can call that way
doThing<Class1>(new Class1("class 1"));
//or that way (the function infers the type through the param)
doThing(new Class2("class 2"));