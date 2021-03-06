/**
 * Asynchronous activities are important because sometimes
 * is necessary to do some slow work in JavaScript. There 
 * are two possibilities to do this, the first is execute
 * the that in the synchronized way, where the process stop
 * and wait the slow activity finish to do the work. This isn't 
 * very good. You can use asynchronous function to do the slow job
 * without prejudice the other processes. 
 * 
 * In JavaScript is possible do this using:
 * 
 * Callback Functions
 * Promises
 * Async and await.
 */

/**
 * Callback functions are functions that get another function as one parameter.
 * This patterns ensure the execution of a function after another.
 */

function firstFunction(secondFunction?:Function) {
    console.log('executing first function');
    if(secondFunction)
        secondFunction();
}

function secondFunction() {
    console.log('executing second function');
}

firstFunction();
firstFunction(secondFunction);

/**
 * Promises
 * 
 * The Promise object is used for asynchronous computations.
 * A Promise represents a value which may be available now, or
 * in the future or never. 
 * 
 *      - Mozilla Developer Network
 * 
 * - Promises has native support in ES2015 (which implies in use this as 
 * target when compiling).
 * 
 * - It has a simple API that has basically two methods: then and catch. 
 * 
 * - Promise methods may be chained together.
 */

function firstPromiseFunction():Promise<string> {
    let p: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
               resolve('executing slow job');
            } catch(err) {
                reject('Error!');
            }
        }, 1000);
    });

    return p;
}

firstPromiseFunction()
    .then(response => {
        console.log('Hard work executed', response)
        return 'chainning promisses';
    })
    .then(response => console.log(response))
    .catch(reason => console.log('There are some errors '+reason));

/**
 * Async / await
 * 
 * Allows code to be written more linearly using ES2015 (compile to ES2015!) 
 * features like Promises, Generators, Iterators and others.
 * 
 * Functions that returns a Promisse are awaitable. 
 * 
 * async functions return a Promise of void (Promise<void>) that can be used to 
 * catch errors.
 */

async function doAsyncWork() {
    let results = await firstPromiseFunction();
    console.log('Async and Await ->', results);
}

doAsyncWork()
    .catch(reason => console.log(reason));