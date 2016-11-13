module interfaces {
    /**
     * Typescript supports the creation of Interfaces that defines
     * the default behavior for some classes, functions and similars.
     */
    interface Rectangle {
        h:number,
        w?:number
    }

    var square = (rect:Rectangle) => rect.w ? rect.w * rect.h : rect.h * rect.h;

    console.log(square({h:7}));
    console.log(square({h:7, w:9}));

    //Let's try something more complex
    interface Car {
        model:string,
        year:number
    }

    //Person.car assigns to Car
    interface Person {
        name:string,
        age:number,
        car?:Car
    }

    //After define the Interfaces I've made an object that assigns to Person
    var person:Person = {
        name: 'Hugo',
        age: new Date().getFullYear() - 1992,
        car: {
            model: 'Ferrari',
            year: new Date().getFullYear()
        }
    }

    var person2:Person = {
        name: 'Hugo without car',
        age: new Date().getFullYear() - 1992
    }
    person2['likeCode'] = true; //After creation you can append new properties

    console.log(person);
    console.log(person2);
}