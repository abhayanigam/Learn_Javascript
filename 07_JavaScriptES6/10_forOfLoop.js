/**
 * In JavaScript, there are three ways we can use a for loop.
        1. JavaScript for loop
        2. JavaScript for...in loop
        3. JavaScript for...of loop
        4. The for...of loop was introduced in the later versions of JavaScript ES6.

        The for..of loop in JavaScript allows you to iterate over 
        iterable objects (arrays, sets, maps, strings etc).
 */

// array
const students = ["Abhaya", "Vedanshi"];

// using for...of
for (let element of students) {
  // display the values
  console.log(element);
}

// string
const string = "code";

// using for...of loop
for (let i of string) {
  console.log(i);
}

// Set
const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
  console.log(i);
}

// Map
let map = new Map();

// inserting elements
map.set("name", "Jack");
map.set("age", "27");

// looping through Map
for (let [key, value] of map) {
  console.log(key + "- " + value);
}

/**
 * for...of with Generators
 * Since generators are iterables, you can implement an iterator in an easier way.
 * Then you can iterate through the generators using the for...of loop.
 */
// generator function
function* generatorFunc() {
  yield 10;
  yield 20;
  yield 30;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
  console.log(value);
}

/*
                                                                for...of Vs for...in
                            for...of:	                                                               for...in:
    1. The for...of loop is used to iterate through the values of an iterable.	|   1. The for...in loop is used to iterate through the keys of an object.
    2. The for...of loop cannot be used to iterate over an object.	            |   2. You can use for...in to iterate over an iterable such arrays and strings 
                                                                                |           but you should avoid using for...in for iterables.
*/
