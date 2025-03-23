/**
 * In JavaScript, there are two kinds of object properties:
    1. Data properties
    2. Accessor properties

    1. Data Property:
        Example of data property that we have been using in the previous tutorials.
        const student = {
            // data property
            firstName: 'Monica';
        };

    2. Accessor Property:
        Accessor properties are methods that get or set the value of an object. 
        For that, we use these two keywords:

        1. get - to define a getter method to get the property value
        2. set - to define a setter method to set the property value
*/

// Getter
const student = {
  // data property
  firstName: "Vedansh",

  // accessor property(getter)
  get getName() {
    return this.firstName;
  },
};
console.log(student.firstName);

// accessing getter methods
console.log(student.getName); // Vedansh
// console.log(student.getName()); // error

// Setter
const student1 = {
  firstName: "Vedansh",
  //accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  },
};

console.log(student1.firstName); // Vedansh
student1.changeName = "Shukla";

console.log(student1.firstName); // Shukla

//Object.defineProperty()
// In JavaScript, you can also use Object.defineProperty() method
// to add getters and setters.

const student2 = {
  firstName: "Vedansh",
};

// getting property
Object.defineProperty(student2, "getName", {
  get: function () {
    return this.firstName;
  },
});

// setting property
Object.defineProperty(student2, "changeName", {
  set: function (value) {
    this.firstName = value;
  },
});

console.log(student2.firstName); // Vedansh

// changing the property value
student2.changeName = "Shukla";
console.log(student2.firstName); // Shukla
