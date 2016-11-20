/**
 * It's possible to create combined types
 * using intersections or unions.
 * 
 * with unions, you define a several valid types
 * for an value. For unions, you can use a pipe
 * element (|). It's important to know, one pipe 
 * represents an union of elements, two pipes is
 * a logical combination. | !== ||
 */

function printIndentifier(id: string | number) {
    return id;
}

console.log(printIndentifier(1), printIndentifier('string'));

/**
 * Intersections says that element should contain ALL types described
 * It's represented by the ampersand element (&). Like the union, & represents the
 * intersection operation and && represents the logical concatenation.
 */

class Book {
    constructor(public name:string){}
}

class Magazine {
    constructor(public name:string, public publisher:string){}
}

let book = new Book("Star Wars");
let magazine = new Magazine("Some Magazine", "Some Publisher");

//This intersected type SHOULD HAVE the properties of books and magazines
let readingMaterial : Book & Magazine = {
    name: book.name,
    publisher: magazine.publisher
}