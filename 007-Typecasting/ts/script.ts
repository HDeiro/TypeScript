
/**
 * It's possible to cast one type for other. but, it's necessary
 * to use an *.d.ts file to specify the type if it's doesn't an 
 * default type of typescript (commonly setted in lib.d.ts).
 */

/*************************************
 * IMPORTANT!
 * 
 * I've got an error when *.js and *.ts was at root because of the *.html file.
 * The compilation scope only supports *.d.ts, *.ts, *.tsx files and because of the
 * presence of an *.html throws an error like:
 * 
 * error TS6054: File '../script.js' has unsupported extension. The only supported extensions 
 * are '.ts', '.tsx', '.d.ts'.
 * 
 * I believe it does not happens with the *.js because it's de generated value
 * 
 * When you need to use the *.d.ts files you need to refer it on top of document. For example:
 * 
 * // <reference path="jquery-1.8.d.ts" />
 ************************************/

window.onload = () => {
    //Instanciate a new Calculator, passing the id of elements I want to use
    var calc = new Calculator('x', 'y', 'output');
}

class Calculator {
    //Three Elements. two HTMLInputElements and one HTMLDivElement
    private x:HTMLInputElement;
    private y:HTMLInputElement;
    private output:HTMLDivElement;

    constructor(xID:string, yID:string, outputID:string) {
        //Through ID i get the element and cast it for the type I want to.
        //This time i've used a cast of <HTMLElement> (returned by the document.getElementByID())
        //and casted it to HTMLInputElement and HTMLDivElement to manipulate the DOM.
        this.x = <HTMLInputElement> document.getElementById(xID);
        this.y = <HTMLInputElement> document.getElementById(yID);
        this.output = <HTMLDivElement> document.getElementById(outputID);
        this.wireEvents();
    }

    wireEvents() {
        //Just adding event listeners to operate the values
        document.getElementById('add').addEventListener('click', event => {
            this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
        });
        document.getElementById('subtract').addEventListener('click', event => {
            this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString();
        });
    }

    add(x:number, y:number) {
        return x + y;
    }
    
    subtract(x:number, y:number) {
        return x - y;
    }
}