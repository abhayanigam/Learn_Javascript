/**
 * The setTimeout() method executes a block of code after the specified time. 
 * The method executes the code only once.
 * The commonly used syntax of JavaScript setTimeout is:

    setTimeout(function, milliseconds);
    Its parameters are:

    1. function - a function containing a block of code
    2. milliseconds - the time after which the function is executed
    
    The setTimeout() method returns an intervalID, which is a positive integer.

    Note :
        Note: The setTimeout() method is useful when you want to execute 
        a block of once after some time. For example, showing a message to a
        user after the specified time.
 */

// Example 1: Display a Text Once After 3 Second
function greet() {
  console.log("Hello world");
}

setTimeout(greet, 3000);
console.log("This message is shown first");
let intervalId = setTimeout(greet, 3000);
console.log("Id: " + intervalId);

// Example 2: Display Time Every 3 Second
function showTime() {
  // return new date and time
  let dateTime = new Date();

  // returns the current local time
  let time = dateTime.toLocaleTimeString();

  console.log(time);

  // display the time after 3 seconds
  setTimeout(showTime, 3000);
}

// calling the function
showTime();

//Example 3: Use clearTimeout() Method
let count = 0;
function increaseCount() {
  count += 1;
  console.log(count);
}

let id = setTimeout(increaseCount, 3000);

// clearTimeout
clearTimeout(id);
console.log("setTimeout is stopped.");

/**
 * You can also pass additional arguments to the setTimeout() method.
 *  The syntax is:
        setTimeout(function, milliseconds, parameter1, ....paramenterN);
 */

function greet(name, lastName) {
  console.log("Hello" + " " + name + " " + lastName);
}

// passing argument to setTimeout
setTimeout(greet, 1000, "Abhaya", "Nigam");
