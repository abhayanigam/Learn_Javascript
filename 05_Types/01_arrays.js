//Create an Array

// 1. Using an array literal
const array1 = ["eat", "sleep"];
console.log(array1);

// 2. Using the new keyword
const array2 = new Array("eat", "sleep");
console.log(array2);

// Note: It is recommended to use array literal to create an array.

// Examples of arrays:
// empty array
const myList = [];

// array of numbers
const numberArray = [2, 4, 6, 8];

// array of strings
const stringArray = ["eat", "work", "sleep"];

// array with mixed data types
const newData = ["work", "exercise", 1, true];

//functions and other objects inside an array
const newData1 = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
];

//Access Elements of an Array
const myArray = ["h", "e", "l", "l", "o"];

// first element
console.log(myArray[0]); // "h"

// second element
console.log(myArray[1]); // "e"

// Add an Element to an Array
let dailyActivities = ["eat", "sleep"];

// add an element at the end
dailyActivities.push("exercise");

console.log(dailyActivities);

//The unshift() method adds an element at the beginning of the array.
//add an element at the start
dailyActivities.unshift("work");
console.log(dailyActivities);

//Change the Elements of an Array
// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = "exercise";

console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

// this will add the new element 'exercise' at the 4 index
dailyActivities[4] = "exercise";

console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities); // ['work', 'eat']

// remove the first element
dailyActivities.shift();
console.log(dailyActivities); // ['eat', 'sleep']

// this gives the total number of elements in an array
console.log(dailyActivities.length); // 2

//Array Methods
let newRoutine = ["eat"];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf("work");
console.log(position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]

//You can also store values by passing a named key in an array:
let arr = ["h", "e"];
arr.name = "Abhaya";

console.log(arr); // ["h", "e"]
console.log(arr.name); // "Abhaya"
console.log(arr["name"]); // "Abhaya"
console.log(arr.length);

//           ['h','e','Abhaya']
// index -->   0   1   name

//----------------------------------------------------------------------------
// Array forEach()
// The forEach() method executes a provided function for each array element.

let numbers = [1, 3, 4, 9, 8];
function computeSquare(element) {
  console.log(element * element);
}
numbers.forEach(computeSquare);

//-----------------------------------------------------------------------------

function printElements(element, index) {
  console.log("Array Element " + index + ": " + element);
}

const prices = [1800, 2000, 3000, , 5000, 500, 8000];
prices.forEach(printElements);

//-----------------------------------------------------------------------------

//Array filter()
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0) return true;
  else return false;
}

let evenNumber = numbers1.filter(checkEven);
console.log(evenNumber);
