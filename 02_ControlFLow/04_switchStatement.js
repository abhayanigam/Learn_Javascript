// Switch Statement

// Simple Calculator Example:

let result;

// To use the prompt in windows
const prompt = require("prompt-sync")({ sigint: true });
const operator = prompt("Enter operator ( either +, -, * or / ): ");

const number1 = parseInt(prompt("Enter first number: "));
const number2 = parseInt(prompt("Enter second number: "));

switch (operator) {
  case "+":
    console.log(`The sum of the numbers is ${(result = number1 + number2)}`);
    break;
  case "-":
    console.log(
      `The substraction of the numbers is ${(result = number1 - number2)}`
    );
    break;
  case "*":
    console.log(
      `The multiplication of the numbers is ${(result = number1 * number2)}`
    );
    break;
  case "/":
    console.log(
      `The division of the numbers is ${(result = number1 / number2)}`
    );
    break;
  default:
    console.log("Invalid Statement");
    break;
}
