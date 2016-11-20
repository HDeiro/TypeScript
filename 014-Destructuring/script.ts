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