/**
 * It's possible to divide properties of objects, arrays 
 * and similars into individual variables
 */

//*****************************************
// WITH ARRAYS
//*****************************************

let medals = ['bronze', 'silver', 'gold'];

//You can split this way:

let bronze = medals[0];
let silver = medals[1];
let gold   = medals[2];

console.log('[Arrays] OLD FASHIONED WAY ->', bronze, silver, gold);

/**
 * But, ES5 gave the desestructuring property,
 * like this:
 */

let [third, second, first] = medals;

console.log('[Arrays] NEW FASHIONED WAY ->',third, second, first);

//*****************************************
// WITH OBJECTS
//*****************************************

let car = {
    model: 'Ferrari',
    age: 2016
}

//you can get properties like this:

let old_mode1_model = car.model;
let old_mode1_age = car.age;

console.log('[Objects] OLD FASHIONED WAY (Mode 1) -> ', old_mode1_model, old_mode1_age);

//Or like this

let old_mode2_model = car['model'];
let old_mode2_age = car['age'];

console.log('[Objects] OLD FASHIONED WAY (Mode 2) -> ', old_mode2_model, old_mode2_age);

//But, nowadays, you can do something like this:

let {model, age} = car; //The variables names should match with the properties of the object

console.log('[Objects] NEW FASHIONED WAY -> ', model, age);