/**
 * In JavaScript is possible to set the type of the variable in runtime.
 * It also works at TypeScript. But, it's not good to use because of the
 * non predicted error wich could be happen.
 */
//Situation 1
// (() => {
//     var car; //Undefined type
//     car = 'Ferrari';
//     //It works fine
//     console.log(car.substring(0,4)); 
//     car = {
//         model: 'Ferrari',
//         year: 2016
//     };
//     //Wrong! TypeError: car.substring is not a function. 
//     //It happens because car is not a String, but a object
//     console.log(car.substring(0,4)); 
// })();
//Situation 2
// (() => {
//     var car:string;
//     car = 'Ferrari';
//     //It works fine
//     console.log(car.substring(0,4));
//     //It throws an exception because object is not signable to type string.
//     car = {
//         model: 'Ferrari',
//         year: 2016
//     };
//     console.log(car.substring(0,4));
// })();
//Situation 3
(function () {
    var car;
    car = 'Ferrari';
    //It works fine
    console.log(car.substring(0, 4));
    //It throws an exception because object is not signable to type string.
    var car2 = {
        model: 'Ferrari',
        year: 2016
    };
    console.log(car2.model.substring(0, 4));
})();
