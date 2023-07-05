/*
    Object Declaration
        The syntax to declare an object is:

        const object_name = {
            key1: value1,
            key2: value2
        }
        Here, an object object_name is defined.
        Each member of an object is a key: value pair separated by
        commas and enclosed in curly braces {}.

        For example,
            // object creation
            const person = { 
                name: 'John',
                age: 20
            };
            console.log(typeof person); // object

        You can also define an object in a single line:
            const person = { name: 'John', age: 20 };
 */

// Accessing Object Properties

// 1. Using dot Notation
const person = { name: "Abhaya", age: 20 };
console.log(person.name);

// 2. Using bracket Notation
console.log(person["age"]);

// 3. Nested Objects
const human = {
  name: "Veadnshi",
  age: 18,
  marks: {
    science: 70,
    maths: 90,
  },
};

console.log(human.marks);
console.log(human.marks.maths);

// 4. Methods in object
const insaan = {
  name: "Sam",
  age: 30,
  greet: function () {
    console.log("hello");
  },
};

insaan.greet(); // hello
