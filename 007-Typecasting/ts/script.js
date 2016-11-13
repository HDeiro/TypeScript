/**
 * It's possible to cast one type for other. but, it's necessary
 * to use an *.d.ts file to specify the type if it's doesn't an
 * default type of typescript (commonly setted in lib.d.ts).
 */
/*************************************
 * IMPORTANT!
 *
 * I've got an error when *.js and *.ts was at root because of the *.html file.
 * The compilation scope only supports *.d.ts, *.ts, *.js files and because of the
 * presence of an *.html throws an error
 ************************************/
window.onload = function () {
    //Instanciate a new Calculator, passing the id of elements I want to use
    var calc = new Calculator('x', 'y', 'output');
};
var Calculator = (function () {
    function Calculator(xID, yID, outputID) {
        //Through ID i get the element and cast it for the type I want to.
        //This time i've used a cast of <HTMLElement> (returned by the document.getElementByID())
        //and casted it to HTMLInputElement and HTMLDivElement to manipulate the DOM.
        this.x = document.getElementById(xID);
        this.y = document.getElementById(yID);
        this.output = document.getElementById(outputID);
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        //Just adding event listeners to operate the values
        document.getElementById('add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
        document.getElementById('subtract').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
    };
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
