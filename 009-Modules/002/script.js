"use strict";
require('../script.js');
/**
 * It's possible to extend the namespace appending new classes
 * or interfaces. But, to use a resource described in last declaration
 * this resource should be exported.
 *
 * For example, to use Dimension interface here, was necessary to export it, but,
 * i dont need to reffers through Shapes.Dimension because i'm already inside Shapes.
 */
var Shapes;
(function (Shapes) {
    var Elipse = (function () {
        function Elipse(dimension) {
            var _this = this;
            this.dimension = dimension;
            this.calcArea = function () { return _this.dimension.h * _this.dimension.h * Math.PI; };
        }
        return Elipse;
    }());
    Shapes.Elipse = Elipse;
})(Shapes || (Shapes = {}));
//I can use the rectangle defined in ../001/script.ts
var rectangle = new Shapes.Rectangle({ h: 10, w: 20 });
//But, i can also use the Elipse i have defined here in 002/script.ts
var elipse = new Shapes.Elipse({ h: 10 });
console.log(rectangle.calcArea());
console.log(elipse.calcArea());
