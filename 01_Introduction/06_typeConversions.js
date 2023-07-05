/*
    Type conversion is the process of converting data of one type to another. 
    For example: converting String data to Number.

    There are two types of type conversion in JavaScript.
        Implicit Conversion - automatic type conversion
        Explicit Conversion - manual type conversion
*/

// Implicit Conversion
let result;

result = '3' + 2;
console.log(result);

result = '3' + true;
console.log(result);

result = '3' + undefined;
console.log(result);

result = '3' + null;
console.log(result);

// Note : When a number is added to a string, 
//        JavaScript converts the number to a string before concatenation.

//----------------------------------------------------------------------------

// Non-numeric String
// non-numeric string used with - , / , * results to NaN

let result1;

result1 = 'hello' - 'world';
console.log(result1); // NaN

result1 = '4' - 'hello';
console.log(result1); // NaN

//----------------------------------------------------------------------------
// Implicit Boolean Conversion

let result2;

result2 = '4' - true;
console.log(result2); // 3

result2 = 4 + true;
console.log(result2); // 5

result2 = 4 + false;
console.log(result2); // 4

//----------------------------------------------------------------------------
// null Conversion of number
// null is 0 when used with number
let result3;

result3 = 4 + null;
console.log(result3);  // 4

result3 = 4 - null;
console.log(result3);  // 4

//----------------------------------------------------------------------------
// undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN

let result5;

result5 = 4 + undefined;
console.log(result5);  // NaN

result5 = 4 - undefined;
console.log(result5);  // NaN

result5 = true + undefined;
console.log(result5);  // NaN

result5 = null + undefined;
console.log(result5);  // NaN

//----------------------------------------------------------------------------
// Convert to Number Explicitly
let result6;

// string to number
result6 = Number('324');
console.log(result6); // 324

result6 = Number('324e-1')  
console.log(result6); // 32.4

// boolean to number
result6 = Number(true);
console.log(result6); // 1

result6 = Number(false);
console.log(result6); // 0

result6 = Number(null);
console.log(result6);  // 0

result6 = Number(' ')
console.log(result6);  // 0

result6 = Number('hello');
console.log(result6); // NaN

result6 = Number(undefined);
console.log(result6); // NaN

result6 = Number(NaN);
console.log(result6); // NaN

//----------------------------------------------------------------------------
// Note: You can also generate numbers from strings
//  using parseInt(), parseFloat(), unary operator + and Math.floor().
let result7;
result7 = parseInt('20.01');
console.log(result7); // 20

result = parseFloat('20.01');
console.log(result7); // 20.01

result7 = +'20.01';
console.log(result7); // 20.01

result7 = Math.floor('20.01');
console.log(result7); // 20

//----------------------------------------------------------------------------
// Convert to String Explicitly
// To convert other data types to strings, you can use either String() or toString()
//number to string
let result8;
result8 = String(324);
console.log(result8);  // "324"

result8 = String(2 + 4);
console.log(result8); // "6"

//other data types to string
result8 = String(null);
console.log(result8); // "null"

result8 = String(undefined);
console.log(result8); // "undefined"

result8 = String(NaN);
console.log(result8); // "NaN"

result8 = String(true);
console.log(result8); // "true"

result8 = String(false);
console.log(result8); // "false"

// using toString()
result8 = (324).toString();
console.log(result8); // "324"

result8 = true.toString();
console.log(result8); // "true"

// Note: String() takes null and undefined and converts them to string.
//  However, toString() gives error when null are passed.

//----------------------------------------------------------------------------
// Convert to Boolean Explicitly
let result9;
result9 = Boolean('');
console.log(result9); // false

result9 = Boolean(0);
console.log(result9); // false

result9 = Boolean(undefined);
console.log(result9); // false

result9 = Boolean(null);
console.log(result9); // false

result9 = Boolean(NaN);
console.log(result9); // false

result9 = Boolean(324);
console.log(result9); // true

result9 = Boolean('hello');
console.log(result9); // true

result9 = Boolean(' ');
console.log(result9); // true 