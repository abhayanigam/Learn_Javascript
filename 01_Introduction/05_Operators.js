/*
    Operator Types:
        Assignment Operators
        Arithmetic Operators
        Comparison Operators
        Logical Operators
        Bitwise Operators
        String Operators
        Other Operators

    Link 1 :- https://www.programiz.com/javascript/operators
    Link 2 :- https://www.w3schools.com/js/js_operators.asp
*/

// Arithmetic Operators
let x = 5;
let y = 3;

//addition
console.log('x+y = ',x+y);

//substraction
console.log('x-y = ',x-y);

//multiplication
console.log('x*y = ',x*y);

//division
console.log('x/y = ',x/y);

//remainder
console.log('x%y = ',x%y);

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);

//----------------------------------------------------------------------------
// Comparison operators
// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

//----------------------------------------------------------------------------
// Logical Operators
// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

//----------------------------------------------------------------------------
//String Operators
//concatenation operator
console.log('hello' + 'world');
let a = 'Javascript';
a += 'tutorial';
console.log(a);