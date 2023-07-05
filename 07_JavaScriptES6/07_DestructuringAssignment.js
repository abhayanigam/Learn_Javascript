/**
 * Destructuring
 * Note: The order of the name does not matter in object destructuring.
 * Note: When destructuring objects, you should use the same name
 *          for the variable as the corresponding object key.
 */
// assigning object attributes to variables

// before ES6:
const person = {
  name: "Vedanshi",
  age: 25,
  gender: "female",
};

let name1 = person.name;
let age1 = person.age;
let gender1 = person.gender;

console.log(name1); // Vedanshi
console.log(age1); // 25
console.log(gender1); // female

//after ES6:
// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Vedanshi
console.log(age); // 25
console.log(gender); // female

// destructuring assignment
// using different variable names
let { name: name2, age: age2, gender: gender2 } = person;

console.log(name2); // Vedanshi
console.log(age2); // 25
console.log(gender2); // female

//Array Destructuring:
const arrValue = ["one", "two", "three"];
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three

//In object destructuring, you can pass default values in a similar way.
const person1 = {
  name3: "Abhaya",
};

// assign default value 26 to age if undefined
const { name3, age3 = 26 } = person1;

console.log(name3); // Jack
console.log(age3); // 26

//Swapping Variables
// program to swap variables

let a = 4;
let b = 7;

// swapping variables
[a, b] = [b, a];

console.log(a); // 7
console.log(b); // 4

//Skip Items:
const arr = ["one", "two", "three"];

// destructuring assignment in arrays
const [x1, , z1] = arr;

console.log(x1); // one
console.log(z1); // three

const arr2 = ["one", "two", "three", "four"];
// assigning remaining elements to y
const [x2, ...y1] = arrValue;

console.log(x2); // one
console.log(y1); // ["two", "three", "four"]

/**
 * Note: The variable with the spread syntax cannot have a trailing comma ,.
 *  You should use this rest element (variable with spread syntax) as the last variable.
 */
