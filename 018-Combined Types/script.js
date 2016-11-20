/**
 * It's possible to create combined types
 * using intersections or unions.
 *
 * with unions, you define a several valid types
 * for an value
 */
function printIndentifier(id) {
    return id;
}
console.log(printIndentifier(1), printIndentifier('string'));
