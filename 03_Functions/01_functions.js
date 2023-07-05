// Functions

/*
    Note:
        Declaring a Function:
        - The syntax to declare a function is:

        function nameOfFunction () {
            // function body   
        }

        - A function is declared using the function keyword.
        - The body of function is written within {}.
*/

// Example 1:
//Function with no parameters and no return value
function greet() {
  console.log("Greeting");
}

greet();

// Example 2:
// Function with parameters and no return value
function greet(name) {
  console.log("Hello " + name + ":)");
}

const prompt = require("prompt-sync")({ sigint: true });
let name = prompt("Enter a name: ");
greet(name);

// Example 3:
// Function with parameters and return value
function add(a, b) {
  return a + b;
}

let ans = add(3, 4);
console.log(`The ans is ${ans}`);

// Example 4:
// Function no parameters and return value
function addd() {
  return 3 + 2;
}

let ans1 = addd();
console.log(`The ans is ${ans1}`);

// Function Expressions
let x = function (num) {
  return num * num;
};

console.log(x(4));
let y = x(3);
console.log(y);
