/*
    Note:
        In JavaScript, a variable has two types of scope:
            1. Global Scope
            2. Local Scope
*/

// program to show the change in global variable
let a = "Jalaj";

function greet() {
  a = 420;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log("Global jalaj change : ", a);

// program showing local scope of a variable
let b = "Jalaj";

function greet() {
  let c = "local";
  console.log(b + c);
}

greet();
console.log(b + c); // error
