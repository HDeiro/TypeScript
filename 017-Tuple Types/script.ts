/**
 * Tuple types combines a set of numerically named
 * properties with the same members of an array types.
 *      - TypeScript Language Specification (Section 3.3.3)
 * 
 * Tuple types are extensions to arrays that contains the first
 * element as number and de second as string. So, that may contain 
 * different types.
 * 
 *  - let myTuple: [number, string] = [10, 'Popcorn']; 
 */

class Book {
    constructor(public name:string, public isbn:number) {}
}

let bookName = 'Harry Potter and the Chamber of Secrets';
let catalog : [string, Book] = [bookName, new Book(bookName, 12345)];

/**
 * It's possible to create the Tuple Types using an 
 * interface to better control the types wich is going to 
 * be used
 */

//A key value pair that extens an array of k and v. The | represents an union.
interface KeyValuePair<K, V> extends Array<K | V> {
    0: K; //Property 0 should be K type
    1: V; //Property 1 should be V type
}

let otherCatalog: KeyValuePair<string, Book> = [bookName, new Book(bookName, 12345)];

/**
 * Other values could be of any types. In last case, or book or string.
 * But using Tuple Types could be very handy to make key value structures.
 * 
 * So, you can set a book to property 2 ahead. But, i'ts very indicated to
 * use in the predefinited order. Eg:
 * 
 * 0 = string
 * 1 = book
 * 2 = string
 * 3 = book
 * ...
 */