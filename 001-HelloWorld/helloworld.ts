class HelloWorld {
    name:string;

    constructor (name:string) {
        this.name = name;
    }

    sayHello() {
        alert('Hello, ' + this.name + '. Hello World!');
    }
}

window.onload = function() {
    let hw = new HelloWorld('Hugo');
    hw.sayHello();
}