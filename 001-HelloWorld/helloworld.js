var HelloWorld = (function () {
    function HelloWorld(name) {
        this.name = name;
    }
    HelloWorld.prototype.sayHello = function () {
        alert('Hello, ' + this.name + '. Hello World!');
    };
    return HelloWorld;
}());
window.onload = function () {
    var hw = new HelloWorld('Hugo');
    hw.sayHello();
};
