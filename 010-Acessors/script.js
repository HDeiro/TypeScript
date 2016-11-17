/**
 * It's possible to create custom acessors to an object
 * properties wich allows to do other stuff like validations, eg.
 */
var Rectangle = (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    Object.defineProperty(Rectangle.prototype, "height", {
        //Get Acessor
        get: function () {
            return this._height;
        },
        //Set Acessor
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
var rect = new Rectangle(10, 20);
console.log(rect.height, rect.width);
