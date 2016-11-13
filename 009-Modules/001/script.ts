/**
 * It's possible to define modules in typescript that contains some
 * wrapped code for security and access control. You can define wich
 * things will be visible through the namespace using the keyword export.
 */
namespace Shapes {
    //private interface, visible only in Shapes internal scope
    interface Dimension {
        h : number,
        w ?: number
    }

    //public class, visible in the public scope through the Shapes namespace.
    export class Rectangle {
        constructor(public dimension:Dimension) {}

        calcArea = ():number => {
            return this.dimension.h * (this.dimension.w || this.dimension.h);
        }
    }
}

//Usage
var rectangle = new Shapes.Rectangle({h:10});
var rectangle2 = new Shapes.Rectangle({h:10, w:2});

console.log(rectangle.calcArea());
console.log(rectangle2.calcArea());