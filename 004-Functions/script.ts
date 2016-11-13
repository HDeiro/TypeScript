module functions {
    /**
     * Typescript supports the creation of functions that
     * can return a value. If doesn't, it will return any
     */
    var squareNumber = function(num:number) {
        return num * num;
    }

    console.log(squareNumber(10));

    /**
     * It also supports the arrow functins of JavaScript (Lambda Functions)
     * that doesn't the keyword function
     */
    var squareNumberArrowFunction = (num:number) => num * num;
    
    console.log(squareNumberArrowFunction(10));

    /**
     * It's possible to define optional values (not default values) for parameters
     */
    var sayHello = (name?:string) => 'Hello ' + (name || '');

    console.log(sayHello());
    console.log(sayHello('Hugo'));

    /**
     * You can define void functions
     */
    var greet = (name?:string): void => {
        console.log('Hello ' + (name || ''));
    }

    greet();
    greet('Hugo');

    /**
     * Functions can receive objects as parameters
     */
    var square = (rect:{h:number, w?:number}):number => rect.w ? rect.h * rect.w : rect.h * rect.h;

    console.log(square({h:7}));
    console.log(square({h:7, w:3}));
}