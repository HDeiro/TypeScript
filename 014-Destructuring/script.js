/**
 * It's possible to divide properties of objects, arrays
 * and similars into individual variables
 */
//*****************************************
// WITH ARRAYS
//*****************************************
var medals = ['bronze', 'silver', 'gold'];
//You can split this way:
var bronze = medals[0];
var silver = medals[1];
var gold = medals[2];
console.log('[Arrays] OLD FASHIONED WAY ->', bronze, silver, gold);
/**
 * But, ES5 gave the desestructuring property,
 * like this:
 */
var third = medals[0], second = medals[1], first = medals[2];
console.log('[Arrays] NEW FASHIONED WAY ->', third, second, first);
