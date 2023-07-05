/**
 * Types of Errors
    In programming, there can be two types of errors in the code:

    Syntax Error: Error in the syntax. 
        For example, if you write consol.log('your result');,
        the above program throws a syntax error. 
        The spelling of console is a mistake in the above code.

    Runtime Error: This type of error occurs during the execution of the program.
        For example,calling an invalid function or a variable.

    These errors that occur during runtime are called exceptions.
 */

// Example 1: Display Undeclared Variable
const numerator = 100,
  denominator = "a";

try {
  console.log("Answer : ", numerator / denominator);

  // forgot to define variable a
  console.log("Forgot to define variable a : ", a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
}

// finally Statement
// The finally block executes both when the code runs successfully or if an error occurs.
try {
  console.log("Answer : ", numerator / denominator);

  // forgot to define variable a
  console.log("Forgot to define variable a : ", a);
} catch (error) {
  console.log("An error caught");
  console.log("Error message: " + error);
} finally {
  console.log("Finally will execute every time");
}

//setTimeout
// The try...catch won't catch the exception if it happened in "timed" code, like in setTimeout().
setTimeout(function () {
  try {
    // error in the code
  } catch {
    console.log("error is caught");
  }
}, 3000);
