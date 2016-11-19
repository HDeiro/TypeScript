/**
 * It's possible to export a default class form a module 
 * that can be reffered by other classes with any alias
 */
export default class {
    constructor(public title:string){}

    doSomething = ():string => 'Doing something with ' + this.title;
}