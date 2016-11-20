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
//*****************************************
// WITH OBJECTS
//*****************************************
var person = {
    name: 'Hugo',
    age: new Date().getFullYear() - 1992
};
//you can get properties like this:
var old_mode1_name = person.name;
var old_mode1_age = person.age;
console.log('[Objects] OLD FASHIONED WAY (Mode 1) -> ', old_mode1_name, old_mode1_age);
//Or like this
var old_mode2_name = person['name'];
var old_mode2_age = person['age'];
console.log('[Objects] OLD FASHIONED WAY (Mode 2) -> ', old_mode2_name, old_mode2_age);
//But, nowadays, you can do something like this:
var name = person.name, age = person.age;
