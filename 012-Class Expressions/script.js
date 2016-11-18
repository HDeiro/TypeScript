/**
 * You can create class as expressions, very similar
 * to pure JS, where an variable assign the class.
 */
var Animal = (function () {
    function class_1(noise) {
        var _this = this;
        this.noise = noise;
        this.makeNoise = function () { return console.log(_this.noise); };
    }
    return class_1;
}());
//You can make new instances refering the variable
var myAnimal = new Animal("roof");
myAnimal.makeNoise();
