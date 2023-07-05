/**
     *  for...in loop:
        The syntax of the for...in loop is:
            for (key in object) {
                // body of for...in
            }

        In each iteration of the loop, a key is assigned to the key variable. 
        The loop continues for all object properties.

        Note: Once you get keys, you can easily find their corresponding values.
 */

// Example 1: Iterate Through an Object
const student = {
  name: "Abhaya",
  class: 14,
  age: 21,
};

for (let key in student) {
  console.log(`${key} => ${student[key]}`);
}

//for...in with Strings
const string = "code";
for (let i in string) {
  console.log(string[i]);
}

// for...in with Arrays
const arr = ["hello", 1, "JavaScript"];
for (let x in arr) {
  console.log(arr[x]);
}
