/**
 * It's possible to use string interpolation with TypeScript.
 * You put the value you want to interpolate inside ${}.
 *
 * Doesn't works: '#{my_var}'
 * Works: `${my_var}`
 */
var person_name = 'Hugo';
console.log("Hello " + person_name);
