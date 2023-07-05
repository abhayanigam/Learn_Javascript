/*
    In JavaScript, we use either var or let keyword to declare variables.
*/

// 5 is assigned to variable x
let x = 5;
console.log(x);

// value of variable x is changed
x = 3;
console.log(x);

/*
    The rules for naming variables are:
        Variable names must start with either a letter,
        an underscore _, or the dollar sign $. 
*/
let a = "hello";
let _a = "hello";
let $a = "hello";

//JavaScript is case-sensitive. So y and Y are different variables.
let y = "hi";
let Y = 5;
console.log(y);
console.log(Y);

//Javascript Constant
const b = 5;
// x = 10;  // Error! constant cannot be changed
console.log(b);
// const x;  // Error! Missing initializer in const declaration.

// Note:
const decl = 1; // Variable declaration (may also be `let` or `var`)

function fn() {} // Function declaration

const obj = { key: "value" }; // Object keys

class C {
  #priv = "value"; // Private property
}

lbl: console.log(1); // Label
