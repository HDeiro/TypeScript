/**
 * You can create class as expressions, very similar 
 * to pure JS, where an variable assign the class.
 */

var Animal = class {
    constructor(public noise:string){}

    makeNoise = ():void => console.log(this.noise);
}

//You can make new instances refering the variable
let myAnimal = new Animal("roof");
myAnimal.makeNoise();