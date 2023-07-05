/**
 * Arrow function is one of the features introduced in the ES6 version of JavaScript.
 * It allows you to create functions in a cleaner way compared to regular functions.
 */

// function expression
let x1 = function (x, y) {
  return x * y;
};
// can be written as

// using arrow functions
let x2 = (x, y) => x * y;

/**
 * Note:
 * Arrow Function Syntax
    The syntax of the arrow function is:

        let myFunction = (arg1, arg2, ...argN) => {
            statement(s)
        }
    Here,

 *  myFunction is the name of the function
 *  arg1, arg2, ...argN are the function arguments
 *  statement(s) is the function body
 *  If the body has single statement or expression, you can write arrow function as:
        let myFunction = (arg1, arg2, ...argN) => expression
 */

// Example 1: Arrow Function with No Argument
let greet = () => console.log("Greeting");
greet();

// Example 2: Arrow Function with One Argument
let greet2 = (x) => console.log(x);
greet2("Hello");

// Example 3: Arrow Function as an Expression (dynamically create a function and use it as an expression)
let age = 5;
let compair =
  age < 18
    ? () => console.log("Chote ho !")
    : () => console.log("Chlo bde hue !!");
compair();

//Example 4: Multiline Arrow Functions
// If a function body has multiple statements, you need to put them inside curly brackets {}
let sum = (a, b) => {
  let result = a + b;
  return result;
};

let ans = sum(2, 3);
console.log(ans);

// this with Arrow Function
function Person() {
  (this.name = "Jack"),
    (this.age = 25),
    (this.sayName = function () {
      console.log(this.age);
      let innerFunc = () => {
        console.log(this.age);
      };

      innerFunc();
    });
}

const x = new Person();
x.sayName();

/**
 * Arguments Binding
 * Regular functions have arguments binding.
 * That's why when you pass arguments to a regular function,
 * you can access them using the arguments keyword.
 * (See Example 1:)
 *
 * When you try to access an argument using the arrow function, it will give an error.(See Example 2:)
 *
 * To solve this issue, you can use the spread syntax. (See Example 3:)
 */

// Example 1:
let a = function () {
  console.log(arguments);
};
a(4, 6, 7); // Arguments [4, 6, 7]

// Example 2:
let b = () => {
  console.log(arguments);
};
b(4, 6, 7); // ReferenceError: Can't find variable: arguments

// Example 3:
let c = (...n) => {
  console.log(n);
};
c(4, 6, 7); // [4, 6, 7]

/**
 * Things You Should Avoid With Arrow Functions
    1. You should not use arrow functions to create methods inside objects.
    2. You cannot use an arrow function as a constructor. For example,
            let Foo = () => {};
            let foo = new Foo(); // TypeError: Foo is not a constructor
 */
