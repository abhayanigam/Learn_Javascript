/**
 * We use the async keyword with a function to represent that the function is an asynchronous function. 
 * The async function returns a promise.
        The syntax of async function is:

        async function name(parameter1, parameter2, ...paramaterN) {
            // statements
        }

    Here,
        name - name of the function
        parameters - parameters that are passed to the function

    The async keyword is used before the function to represent that the function is asynchronous.
    Since this function returns a promise, you can use the chaining method then()
 */

// Example: Async Function
async function f() {
  console.log("Async function.");
  return Promise.resolve(1);
}

f();

f().then(function (result) {
  console.log(result);
});

// await()
let promise1;
let promise2;
let promise3;

async function asyncFunc() {
  let result1 = await promise1;
  let result2 = await promise2;
  let result3 = await promise3;

  console.log(result1);
  console.log(result1);
  console.log(result1);
}
