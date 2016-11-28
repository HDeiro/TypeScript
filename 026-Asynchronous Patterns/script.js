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
 * Promisses
 * Async and await.
 */
/**
 * Callback functions are functions that get another function as one parameter.
 * This patterns ensure the execution of a function after another.
 */
function firstFunction(secondFunction) {
    console.log('executing first function');
    if (secondFunction)
        secondFunction();
}
function secondFunction() {
    console.log('executing second function');
}
firstFunction();
firstFunction(secondFunction);
