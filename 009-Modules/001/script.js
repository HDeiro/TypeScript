var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(dimension) {
            var _this = this;
            this.dimension = dimension;
            this.calcArea = function () {
                return _this.dimension.h * (_this.dimension.w || _this.dimension.h);
            };
        }
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var rectangle = new Shapes.Rectangle({ h: 10 });
var rectangle2 = new Shapes.Rectangle({ h: 10, w: 2 });
console.log(rectangle.calcArea());
console.log(rectangle2.calcArea());
