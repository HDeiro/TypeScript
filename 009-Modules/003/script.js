var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            var _this = this;
            this.height = height;
            this.width = width;
            this.getArea = function () { return _this.height * _this.width; };
        }
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var rectangle = new Shapes.Rectangle(10, 20);
console.log(rectangle.getArea());
