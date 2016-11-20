/**
 * It's possible to add all elements of one array
 * to another array using the spread operator (...)
 */
var array_1 = [1, 2, 3];
var array_2 = array_1.concat([4, 5]);
var array_3 = [6, 7, 8];
//It's possible to use with push operation
array_2.push.apply(array_2, array_3);
console.log(array_2);
