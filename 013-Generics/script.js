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
var Class1 = (function () {
    function Class1(param) {
        this.param = param;
        this.execute = function () { return 'Class 1'; };
    }
    return Class1;
}());
var Class2 = (function () {
    function Class2(param) {
        this.param = param;
        this.execute = function () { return 'Class 2'; };
    }
    return Class2;
}());
function doThing(thing) {
    if (thing instanceof Class1) {
        console.log(thing.execute());
    }
    if (thing instanceof Class2) {
        console.log(thing.execute());
    }
}
doThing(new Class1("class 1"));
doThing(new Class2("class 2"));
