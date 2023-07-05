// //Check if the number is positive

// To use the prompt in windows
const prompt = require("prompt-sync")({ sigint: true });

let a = parseInt(prompt("Enter the first variable: "));
let b = parseInt(prompt("Enter the second variable: "));
//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

// if else... if statement
const number = prompt("Enter a number: ");

if (number > 0) {
  console.log("The number is positive");
} else if (number == 0) {
  console.log("The number is 0");
} else {
  console.log("The number is negative");
}
