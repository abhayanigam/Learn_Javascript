/**
 * JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6)
 * is the newer version of JavaScript that was introduced in 2015.
 * ECMAScript is the standard that JavaScript programming language uses.
 * ECMAScript provides the specification on how JavaScript programming language should work.
 * This tutorial provides a brief summary of commonly used features of ES6 so that you can start quickly in ES6.
 */

//Arrow Function :

// function expression
// let x = function(x, y) {
//    return x * y;
// }
// can be written as

// function expression using arrow function
let x = (x, y) => x * y;

//Parameter Values
function sum(x, y = 5) {
  // take sum
  // the value of y is 5 if not passed
  console.log(x + y);
}

sum(5); // 10
sum(5, 15); // 20

//Destructuring
// The destructuring syntax makes it easier to assign values to a new variable.
// before you would do something like this :
/*
    const person = {
        name: 'Sara',
        age: 25,
        gender: 'female'    
    }

    let name = person.name;
    let age = person.age;
    let gender = person.gender;

    console.log(name); // Sara
    console.log(age); // 25
    console.log(gender); // female
*/

// Using ES6 Destructuring syntax, the above code can be written as:

const person = {
  name: "Sara",
  age: 25,
  gender: "female",
};

let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

// Rest Parameter and Spread Operator
function show(a, b, ...args) {
  console.log(a); // one
  console.log(b); // two
  console.log(args); // ["three", "four", "five", "six"]
}

console.log(show("one", "two", "three", "four", "five", "six"));

let arr1 = ["one", "two"];
let arr2 = [...arr1, "three", "four", "five"];
console.log(arr2); // ["one", "two", "three", "four", "five"]
