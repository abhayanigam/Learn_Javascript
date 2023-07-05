function sum(a = 3, b = 2) {
  return a + b;
}

console.log(sum(1, 2)); // a=1, b=2
console.log(sum(2)); // a=2, b=2
console.log(sum()); // a=3, b=2

// Example 1: Passing Parameter as Default Values
function sum(x = 1, y = x, z = x + y) {
  console.log(x + y + z);
}
sum(); // 4

/**
 * If you reference the parameter that has not been initialized yet, you will get an error.
        function sum( x = y, y = 1 ) {
            console.log( x + y);
        }

        sum();  // ReferenceError: Cannot access 'y' before initialization
 */

//Example 2: Passing Function Value as Default Value
// using a function in default value expression

const summ = () => 15;
const calculate = function (x, y = x * sum()) {
  return x + y;
};
const result = calculate(10);
console.log(result); // 160

// Example 3: Passing undefined Value
function xyz(x = 1) {
  console.log(x);
}

xyz(undefined);
