/**
 * Symbols is an ES2015 property (so, to compile, you should target
 * the ES2015). Keep in mind if you change your target to ES2015 it
 * may not work in all browsers (but probably in the most updated)
 *  
 * There are new primitive data types like Unique and Immutable.
 * 
 * Symbols allow the creation of:
 *      - Unique Constants
 *      - Customize Internal Language Behavior]
 *      - Computed Property Declarations
 */

let mySymbol = Symbol('my_symbol');
let myOtherSymbol = Symbol('my_symbol');

//That's going to be false, because this symbols are unique
console.log(mySymbol === myOtherSymbol);

//Type = symbol
console.log(typeof mySymbol);
console.log(typeof myOtherSymbol);

/**** Practical Example as properties ****/
let myObject = {
    [mySymbol]: 'value of my symbol key'
};

//Print value of the property
console.log(myObject[mySymbol]);

//Print undefined because mySymbol !== 'mySymbol'
console.log(myObject['mySymbol']);

/**** Practical Example as functions ****/
class MyClass {
    [myOtherSymbol]():void {
        console.log('Printed from symbol function');
    }
}

let obj = new MyClass();
obj[myOtherSymbol]();
new MyClass()[myOtherSymbol]();

/**
 * The greatest feature of symbols is the creation
 * of unique names for properties/functions and similars
 * 
 * It's also possible to override default behavior of things
 * like instanceof, typeof, and others. But it's a very specific 
 * usage of Symbols.
 */