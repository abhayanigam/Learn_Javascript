/**
 * In JavaScript, the throw statement handles user-defined exceptions.
 * For example, if a certain number is divided by 0,
 * and if you need to consider Infinity as an exception, you can use the
 * throw statement to handle that exception.
 *
 * Note :You can also use other built-in error constructors
 *       for standard errors: TypeError, SyntaxError, ReferenceError, EvalError,
 *       InternalError, and RangeError.
 */

// Example 1: try...catch...throw
const number = 40;
try {
  if (number > 50) {
    console.log("Success");
  } else {
    // user-defined throw statement
    throw new Error("The number is low");
  }

  // if throw executes, the below code does not execute
  console.log("hello");
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
}

//Rethrow an Exception
// You can also use throw statement inside the catch block to rethrow an exception.

try {
  // user-defined throw statement
  throw new Error("This is the throw");
} catch (error) {
  console.log("An error caught");
  if (number + 8 > 10) {
    // statements to handle exceptions
    console.log("Error message: " + error);
    console.log("Error resolved");
  } else {
    // cannot handle the exception
    // rethrow the exception
    throw new Error("The value is low");
  }
}
