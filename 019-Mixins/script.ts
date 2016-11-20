/**
 * Using mixins it's possible to define Roles to classes.
 * 
 * For example, an Person can be a Professor, can be a Student and somethings
 * like that. It's possible to do it implementing classes that contains the 
 * custom behavior. Yes, implementing classes like interfaces. I'm not wrong. It works.
 * 
 * But, the best way to do it is using a mixin generator, that takes the properties of 
 * some classes and add to an third class
 * 
 * This example is present in TS documentation: https://www.typescriptlang.org/docs/handbook/mixins.html
 */

/**
 * This functions takes two parameters, a derived target and their bases. It iterates
 * through each base taking each property of it's prototype and adding it to the derived
 * target property
 */
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

class Activatable {
    isActive: boolean;
    activate() {this.isActive = true};
    deactivate() {this.isActive = false};
}

class Smart implements Activatable {
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}

applyMixins(Smart, [Activatable]);

let smart = new Smart();
smart.activate();
console.log(smart.isActive);