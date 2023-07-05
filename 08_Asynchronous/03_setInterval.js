/**
 * There are two methods for executing code at specific intervals. 
 * They are:
    setInterval()
    setTimeout()

 *JavaScript setInterval()
 *The setInterval() method repeats a block of code at every given timing event.

    The commonly used syntax of JavaScript setInterval is:
        setInterval(function, milliseconds);
        Its parameters are:

    function - a function containing a block of code
    milliseconds - the time interval between the execution of the function
    
 *The setInterval() method returns an intervalID which is a positive integer.

 *Note:
    The setInterval() method is useful when you want to repeat a block
    of code multiple times. For example, showing a message at a fixed interval.
 */

//Example 1: Display a Text Once Every 1 Second
function greet() {
  console.log("Hello world");
}
setInterval(greet, 1000);

//Example 2: Display Time Every 5 Seconds
function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}
let display = setInterval(showTime, 5000);

// program to display a name
function greet(name, lastName) {
  console.log("Hello" + " " + name + " " + lastName);
}

setInterval(greet, 1000, "Abhaya", "Nigam");
