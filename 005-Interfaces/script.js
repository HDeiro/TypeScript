var interfaces;
(function (interfaces) {
    var square = function (rect) { return rect.w ? rect.w * rect.h : rect.h * rect.h; };
    console.log(square({ h: 7 }));
    console.log(square({ h: 7, w: 9 }));
    //After define the Interfaces I've made an object that assigns to Person
    var person = {
        name: 'Hugo',
        age: new Date().getFullYear() - 1992,
        car: {
            model: 'Ferrari',
            year: new Date().getFullYear()
        }
    };
    var person2 = {
        name: 'Hugo without car',
        age: new Date().getFullYear() - 1992
    };
    person2['likeCode'] = true;
    console.log(person);
    console.log(person2);
})(interfaces || (interfaces = {}));
