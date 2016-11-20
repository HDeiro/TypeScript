/**
 * String literal types allows treat a String as an type.
 * 
 * When you define an literal type, it can only have a String, 
 * undefined or null with the same value as it's value.
 */

let myLiteral : 'Literal';
myLiteral = null;
myLiteral = undefined;
myLiteral = 'Literal';
//myLiteral = 'Non-Literal'; // -> ERROR!

//It gets more power when you use it with an Union operation
//it becomes very similar to enums

let myUnionLiteral : 'TypeA' | 'TypeB';
myUnionLiteral = null;
myUnionLiteral = undefined;
myUnionLiteral = 'TypeA';
myUnionLiteral = 'TypeB';

let myUnionLiteralDifferentTypes: 'TypeA' | number;

myUnionLiteralDifferentTypes = null;
myUnionLiteralDifferentTypes = undefined;
myUnionLiteralDifferentTypes = 'TypeA';
myUnionLiteralDifferentTypes = 10.4;

/**
 * Type Aliases permit to create custom types based on others
 */

type myNewType = boolean | 'TypeA' | number;

let myVarOfNewType: myNewType;

myVarOfNewType = null;
myVarOfNewType = undefined;
myVarOfNewType = true;
myVarOfNewType = 'TypeA';
myVarOfNewType = 10;