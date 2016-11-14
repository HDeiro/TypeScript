namespace Shapes {
    export interface IShape {
        getArea():number;
    }

    export interface IRectangle extends IShape {
        height : number;
        width  : number;
    }

    export class Rectangle implements IRectangle {
        constructor(public height:number, public width:number) {}
        getArea = ():number => this.height * this.width;
    }
}

var rectangle : Shapes.IRectangle = new Shapes.Rectangle(10, 20);
console.log(rectangle.getArea());