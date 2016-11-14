/**
 * It's possible to define modules in typescript that contains some
 * wrapped code for security and access control. You can define wich
 * things will be visible through the namespace using the keyword export.
 */
var Shapes;
(function (Shapes) {
    //public class, visible in the public scope through the Shapes namespace.
    var Rectangle = (function () {
        function Rectangle(dimension) {
            var _this = this;
            this.dimension = dimension;
            this.calcArea = function () { return _this.dimension.h * (_this.dimension.w || _this.dimension.h); };
        }
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
//Usage
var rectangle = new Shapes.Rectangle({ h: 10 });
var rectangle2 = new Shapes.Rectangle({ h: 10, w: 2 });
console.log(rectangle.calcArea());
console.log(rectangle2.calcArea());
