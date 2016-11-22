/**
 * Declaration merging exists when the compiler merge two separate
 * declarations declared with the same name into a single definition.
 *              - TypeScript Handbook
 */

interface Book {
    name: string;
}

interface Book {
    id:number
}

/**
 * The TypeScrpit transpiler will see
 * this interface as:
 * 
 * interface Book {
 *      name:string,
 *      id:number
 * }
 * 
 * Obviously, there is no output because interface
 * is not a concept of JavaScript. So, it's more conceptual.
 * 
 * It's possible to merge:
 *      - interface
 *      - enum
 *      - namespaces
 *      - namespaces with classes
 *      - namespaces with functions
 *      - namespaces with enums
 * 
 * It's not possible to merge:
 *      - classes with classes
 *       
 */

//Namespace with a class
namespace somespace {
    export class ClassA {
    }
}

//Same namespace appending a new class
namespace somespace {
    export class ClassB {
    }
}

//This namespace can export both classes
let a = new somespace.ClassA();
let b = new somespace.ClassB();
