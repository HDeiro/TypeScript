var functions;
(function (functions) {
    /**
     * Typescript supports the creation of functions that
     * can return a value. If doesn't, it will return any
     */
    var squareNumber = function (num) {
        return num * num;
    };
    console.log(squareNumber(10));
    /**
     * It also supports the arrow functins of JavaScript (Lambda Functions)
     * that doesn't the keyword function
     */
    var squareNumberArrowFunction = function (num) { return num * num; };
    console.log(squareNumberArrowFunction(10));
    /**
     * It's possible to define optional values (not default values) for parameters
     */
    var sayHello = function (name) { return 'Hello ' + (name || ''); };
    console.log(sayHello());
    console.log(sayHello('Hugo'));
    /**
     * You can define void functions
     */
    var greet = function (name) {
        console.log('Hello ' + (name || ''));
    };
    greet();
    greet('Hugo');
    /**
     * Functions can receive objects as parameters
     */
    var square = function (rect) { return rect.w ? rect.h * rect.w : rect.h * rect.h; };
    console.log(square({ h: 7 }));
    console.log(square({ h: 7, w: 3 }));
})(functions || (functions = {}));
