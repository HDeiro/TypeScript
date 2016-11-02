//##########################
// ANNOTATIONS 
//##########################

//Declaration (var), name (variable), annotation (:), type(number)
var variable : number;

/**
 * Other possible types could be:
 * 
 * - number    -> var variable:number = 10;
 * - string    -> var variable:string = 'test'
 * - array     -> var variable:(type)[] = [1,2,3]; //Considering type as number
 * - multitype -> var variable[(type1), (type2)] = [10, 'test']; // Considering type1 as number and type2 as string
 * - any       -> var variable:any = 1; //Could be anything.
 * - null      -> var variable:null;
 * - undefined -> var variable:undefined;
 */

//##########################
// INFERENCES 
//##########################

//It's possible to infer the type of a variable through the assigned value
var variable = 10;

//When you try to assign two different kinds the value is casted 
var variable = 10 + 'test'; //It concat 10 and 'test' to 10test (string)

//It does not work because you told to TS the type of variable would be number, but the assigned value isn't
var variable:number = 10 + 'test'; //WRONG!!!!!!