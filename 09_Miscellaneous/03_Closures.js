/**
 * Note: Generally, closures are used for data privacy.
 * Before you learn about closures, you need to understand two concepts:
        Nested Function
        Returning a function
 */

// Nested Function:
// outer function
function greet(name) {
  // inner function
  function displayName() {
    console.log("Hi" + " " + name);
  }
  // calling inner function
  displayName();
}
greet("Abhaya"); // Hi John

// Returning a Function: you can also return a function within a function.
function greet(name) {
  // variable defined outside the inner function
  let name = "Abhaya";
  function displayName() {
    console.log("Hi" + " " + name);
  }
  // returning a function
  return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value

// closure example :
function calculate(x) {
  function multiply(y) {
    return x * y;
  }
  return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8

// Example 2:
function sum() {
  let a = 0;
  function increaseSum() {
    return (a = a + 1);
  }
  return increaseSum;
}

let x = sum();
let a = 5;
console.log(x()); // 1
console.log(x()); // 2
console.log(a); // 5
