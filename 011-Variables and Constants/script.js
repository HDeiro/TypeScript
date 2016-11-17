/**
 * TypeScript supports the old JS way to declare variables using var.
 * But, it's possible to use the let (variable) and const (constant) to
 * define them. Using let/constant you can specify better the scope of an variable or constant.
 */
function execute() {
    var myVar = 'var';
    var myLet = 'let';
    console.log(myVar);
    console.log(myLet);
}
execute();
console.log(myVar);
console.log(myLet);
