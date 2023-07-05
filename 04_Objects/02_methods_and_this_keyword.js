//Adding a Method to a JavaScript Object

// Empty Object is Created
let student = {};

// adding a property
student.name = "Johnny";

// adding a method
student.greet = function () {
  console.log("hello");
};

student.greet();

// this Keyword:
const person = {
  name: "John",
  age: 30,
  greet: function () {
    let surname = "Doe";
    console.log("The name is" + " " + this.name + " " + surname);
  },
};

person.greet();
