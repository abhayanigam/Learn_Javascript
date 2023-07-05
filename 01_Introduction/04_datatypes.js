/*
    Data Types:
        DataTypes	Description                 Example
        String	    Represents textual data	    'hello', "hello world!" etc

        Number	    An integer or a 	         3, 3.234, 3e-2 etc.
                    floating-point number
    
        BigInt	    an integer with arbitrary    900719925124740999n , 1n etc.
                    precision.

        Boolean	    Any of two values:	         true and false
                        true or false

        undefined	a data type whose variable    let a;
                    is not initialized

        null	    denotes a null value	      let a = null;

        Symbol	    data type whose instances     let value = Symbol('hello');
                    are unique and immutable
    
        Object	    key-value pairs of collection  let student = { };
                    of data


    Javascript String:
    String is used to store text. 
    In JavaScript, strings are surrounded by quotes:

        Single quotes: 'Hello'
        Double quotes: "Hello"
        Backticks: `Hello`
*/

//String Example
const name = "ram";
const name1 = "Hari";
const result = `The name are ${name} and ${name1}`;
// This is done by wrapping variables or expressions with ${variable or expression} as shown above.

//Numbers
const number1 = 3;
const number2 = 3.433;
const number3 = 3e5; // 3*10^5

// A number type can also be +Infinity, -Infinity, and NaN (not a number).
const num1 = 3 / 0;
console.log(num1); //Infinity

const num2 = -3 / 0;
console.log(num2); //-Infinity

const num3 = "abc" / 3;
console.log(num3); //NaN

/*
    BigInt
        Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). 
        However, if you need to use a larger number than that, you can use the BigInt data type.
        A BigInt number is created by appending n to the end of an integer.
*/
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
// const result2 = value2 + 1;
// console.log(result2);

//Javascript null
const number = null; // null is a special value that represents empty or unknown value.
//null is not the same as NULL or Null.

// Javascript Symbol
//  A value having the data type Symbol can be referred to as a symbol value.
// Symbol is an immutable primitive value that is unique.
const value_1 = Symbol("hello");
const value_2 = Symbol("hello");
// value_1 and value_2 both contain 'hello', they are different as they are of the Symbol type.

// JavaScript Object
// An object is a complex data type that allows us to store collections of data.
const student = {
  firstName: "ram",
  lastName: null,
  class: 10,
};

// JavaScript typeof
// To find the type of a variable, you can use the typeof operator. For example,

const name_1 = "ram";
typeof name_1; // returns "string"

const number_1 = 4;
typeof number_1; //returns "number"

const valueChecked = true;
typeof valueChecked; //returns "boolean"

const a = null;
typeof a; // returns "object"
// Notice: that typeof returned "object" for the null type. This is a known issue in JavaScript since its first release.
