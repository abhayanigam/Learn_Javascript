/*
    Note:
        Recursion is a process of calling itself.
        A function that calls itself is called a recursive function.
        
        The syntax for recursive function is:
            function recurse() {
                // function code
                recurse();
                // function code
            }
            recurse();

        Also,
            It generally looks like this.
                function recurse() {
                    if(condition) {
                        recurse();
                    }
                    else {
                        // stop calling recurse()
                    }
                }
                recurse();
*/

// Example 1:
// Print Numbers to count down numbers to 1
function countDown(number) {
  console.log(number);
  const newNumber = number - 1;
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);

// Example 2: Find Factorial
function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const num = 3;
if (num > 0) {
  console.log(`The factorial of ${num} is ${factorial(num)}`);
}
