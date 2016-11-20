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
    year: 2016
}

//you can get properties like this:

let old_mode1_model = car.model;
let old_mode1_year = car.year;

console.log('[Objects] OLD FASHIONED WAY (Mode 1) -> ', old_mode1_model, old_mode1_year);

//Or like this

let old_mode2_model = car['model'];
let old_mode2_year = car['year'];

console.log('[Objects] OLD FASHIONED WAY (Mode 2) -> ', old_mode2_model, old_mode2_year);

//But, nowadays, you can do something like this:

let {model, year} = car; //The variables names should match with the properties of the object

console.log('[Objects] NEW FASHIONED WAY -> ', model, year);

//And you can also do something like this

let {model:car_model, year:car_year} = car;
console.log('[Objects] NEW FASHIONED WAY (Custom variables) -> ', car_model, car_year);
