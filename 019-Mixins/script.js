/**
 * Using mixins it's possible to define Roles to classes.
 *
 * For example, an Person can be a Professor, can be a Student and somethings
 * like that. It's possible to do it implementing classes that contains the
 * custom behavior. Yes, implementing classes like interfaces. I'm not wrong. It works.
 *
 * But, the best way to do it is using a mixin generator, that takes the properties of
 * some classes and add to an third class
 */
/**
 * This functions takes two parameters, a derived target and their bases. It iterates
 * through each base taking each property of it's prototype and adding it to the derived
 * target property
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
var Activatable = (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () { this.isActive = true; };
    ;
    Activatable.prototype.deactivate = function () { this.isActive = false; };
    ;
    return Activatable;
}());
var Smart = (function () {
    function Smart() {
        this.isActive = false;
    }
    return Smart;
}());
applyMixins(Smart, [Activatable]);
var smart = new Smart();
smart.activate();
console.log(smart.isActive);
