/**
 * It's possible to add all elements of one array
 * to another array using the spread operator (...)
 */

let array_1 = [1, 2, 3];
let array_2 = [...array_1, 4, 5];
let array_3 = [6, 7, 8];

//It's possible to use with push operation
array_2.push(...array_3);

console.log(array_2);