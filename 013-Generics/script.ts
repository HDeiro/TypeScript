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

//SECOND EXAMPLE
interface Inventory<T> {
    getNewestItem: () => T;
    addItem: (newItem: T) => void;
    getAllItems: () => Array<T>;
}

class Catalog<T> implements Inventory<T> {
    private items = new Array<T>();

    addItem(newItem:T) {
        this.items.push(newItem);
    }

    getNewestItem() {
        return this.items[this.items.length - 1];
    }

    getAllItems() {
        return this.items;
    }
}

class Book {
    constructor(public name:string){}
}

let catalog = new Catalog<Book>();

catalog.addItem(new Book("Book 1"));
catalog.addItem(new Book("Book 2"));
catalog.addItem(new Book("Book 3"));

console.log(catalog.getNewestItem().name);
console.log(catalog.getAllItems());