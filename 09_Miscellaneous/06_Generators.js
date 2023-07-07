/**
 * In JavaScript, generators provide a new way to work with functions and iterators.
        Using a generator,

        you can stop the execution of a function from anywhere inside the function
        and continue executing code from a halted position

 *Create JavaScript Generators
    To create a generator, you need to first define a generator function with function* symbol. 
    The objects of generator functions are called generators.

        // define a generator function
        function* generator_function() {
        ... .. ...
        }

        // creating a generator
        const generator_obj = generator_function();

    Note: 
        The generator function is denoted by *. You can either use function* generatorFunc() {...} or function *generatorFunc(){...} to create them.
 */

// Using yield to Pause Execution:
// the execution of a generator function without executing the whole function body.
// For that, we use the yield keyword.
// generator function
function* generatorFunc() {
  console.log("1. code before the first yield");
  yield 100;

  console.log("2. code before the second yield");
  yield 200;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// Generators are Used for Implementing Iterables:
// creating iterable object
const iterableObj = {
  // iterator method
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: "1", done: false };
        } else if (step === 2) {
          return { value: "2", done: false };
        } else if (step === 3) {
          return { value: "3", done: false };
        }
        return { value: "", done: true };
      },
    };
  },
};

for (const i of iterableObj) {
  console.log(i);
}

/**
 * JavaScript return Vs yield Keyword :
                        return Keyword	                               |     yield Keyword
    1. Returns the value and terminates the function.	               | 1. Returns the value and halts the function but does not terminate the function.
    2. Available in both the normal functions and generator functions. | 2. Available only in generator functions.
 */

//JavaScript Generator Function With return
// You can use the return statement in a generator function.
// The return statement returns a value and terminates the function (similar to regular functions).
// generator function
function* generatorFunc() {
  yield 100;

  return 123;

  console.log("2. some code before second yield");
  yield 200;
}

// returns generator object
const generator2 = generatorFunc();

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());

// Note: You can also use the return() method instead of the return statement like generator.return(123); in the above code.

//  Generator Throw Method:
// You can explicitly throw an error on the generator function using the throw() method.
// The use of throw() method throws an error and terminates the function.
// generator function
function* generatorFunc() {
  yield 100;
  yield 200;
}

// returns generator object
const generator3 = generatorFunc();

console.log(generator3.next());

// throws an error
// terminates the generator
console.log(generator3.throw(new Error("Error occurred.")));
console.log(generator3.next());

/**
 * Uses of Generators:
    1. Generators let us write cleaner code while writing asynchronous tasks.
    2. Generators provide an easier way to implement iterators.
    3. Generators execute its code only when required.
    4. Generators are memory efficient.
 */
