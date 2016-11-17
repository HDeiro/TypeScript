/**
 * It's possible to create custom acessors to an object
 * properties wich allows to do other stuff like validations, eg.
 * 
 * It's important to know that only ES5+ supports the acessors. So, to
 * compile this code you will need to target the es5.
 * 
 * Example: tsc script.ts --target es5.
 */
class Rectangle {
    private _height:number;
    private _width:number;

    constructor(height:number, width:number) {
        this.height = height;
        this.width = width;
    }

    //Get Acessor
    get height():number {
        return this._height;
    }

    //Set Acessor
    set height(height:number) {
        this._height = height;
    }

    get width():number {
        return this._width;
    }

    set width(width:number) {
        this._width = width;
    }
}

let rect = new Rectangle(10, 20);
console.log(rect.height, rect.width);