/**
 * Note:
    Prototypes are the mechanism by which JavaScript objects inherit 
    features from one another.
*/

//Prototype Inheritance:
function Person() {
  (this.name = "Abhaya"), (this.age = 23);
}

const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = "male";

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

// Add Methods to a Constructor Function Using Prototype :
Person.prototype.greet = function () {
  console.log("hello" + " " + this.name);
};
person1.greet();
person2.greet();

// Changing Prototype :

// add a property
Person.prototype.age = 20;

// creating an object
const person4 = new Person();

console.log(person4.age); // 20

// changing the property value of prototype
Person.prototype = { age: 50 };

// creating new object
const person5 = new Person();

console.log(person4.age); // 50
console.log(person5.age); // 20
