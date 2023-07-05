/**
 *  Create JavaScript Strings:
        In JavaScript, strings are created by surrounding them with quotes. 
        There are three ways you can use quotes.

            Single quotes: 'Hello'
            Double quotes: "Hello"
            Backticks: `Hello`
*/

//strings example
const name = "Peter";
const name1 = "Jack";
const result = `The names are ${name} and ${name1}`;

//Access String Characters
// Method 1:
const a = "hello";
console.log(a[1]);

// Method 2:
console.log(a.charAt(1));

//Strings are immutable
let b = "Hello";
b[1] = "a";
console.log(b);

//Note :However, you can assign the variable name to a new string.
b = "World";
console.log(b);

// Case-Sensitive
let c = "a";
let d = "A";
console.log(c === b); //false;

// String Length
console.log(a.length);

// String Objects
const e = "hello";
const f = new String("Hello");
console.log(e + " " + f);

//String Methods
const text1 = "hello";
const text2 = "world";
const text3 = "     JavaScript    ";

// concatenating two strings
const result1 = text1.concat(" ", text2);
console.log(result1); // "hello world"

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); // JavaScript

// converting the string to an array
const result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
const result5 = text1.slice(1, 3);
console.log(result5); // "el"
