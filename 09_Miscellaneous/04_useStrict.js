/**
 * In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. 
 * This makes it easier to write good and secure JS code. 
 * 
 * For example,
        myVariable = 9;

    Here, myVariable is created without declaring.
    This works as a global variable in JavaScript. 
    However, if you use this in strict mode, 
    the program will throw an error. 
    
    For example,
        'use strict';

    // Error
    myVariable = 9;

    The above code throws an error because myVariable is not declared. 
    In strict mode, you cannot use the variable without declaring them.

    To indicate this program is in the strict mode, we have used

    'use strict';
        at the top of the program.

    You can declare the strict mode by adding 'use strict'; or "use strict";
    at the beginning of a program.

    When you declare strict mode at the beginning of a program, 
    it will have global scope and all the code in the program will 
    execute in strict mode.

    Note: 
        You need to declare strict mode at the beginning of the program. 
        If you declare strict mode below some code, it won't work.
 */

// Strict Mode in Function:
myVariable = 9;
console.log(myVariable); // 9

function hello() {
  // applicable only for this function
  "use strict";

  string = "hello"; // throws an error
}

hello();

/**
 * Benefits of Strict Mode
    The use of strict mode:
        > helps to write a cleaner code
        > changes previously accepted silent errors (bad syntax) into real errors and throws an error message
        > makes it easier to write "secure" JavaScript
 */
