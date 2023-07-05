// Create Multiple Objects with Constructor Function

// Constructor Function
function Person() {
  (this.name = "Abhaya"),
    (this.age = 23),
    (this.greet = function () {
      console.log("hello");
    });
}

// creating objects
const person1 = new Person();
const person2 = new Person();

console.log(person1.name);
console.log(person2.name);

//Constructor Function Parameters
function insaan(person_name, person_age, person_gender) {
  (this.name = person_name),
    (this.age = person_age),
    (this.gender = person_gender),
    (this.greet = function () {
      return "Hi" + " " + this.name;
    });
}
const insaan1 = new insaan("John", 23, "male");
const insaan2 = new insaan("Sam", 25, "female");

console.log(insaan1.name);
console.log(insaan2.name);

//Adding Properties And Methods in an Object

function Human() {
  (this.name = "liver"), (this.age = 23);
}
let human1 = new Human();
let human2 = new Human();

human1.gender = "male";

human1.greet = function () {
  console.log("hello");
};

human1.greet();

// human2 doesn't have greet() method
human2.greet();

//Object Prototype:
function Manav() {
  (this.name = "John"), (this.age = 23);
}

// creating objects
let manav1 = new Manav();
let manav2 = new Manav();

// adding new property to constructor function
Manav.prototype.gender = "Male";

console.log(manav1.gender);
console.log(manav2.gender);

// Built-in Constructors

// Some of them are:
let a = new Object(); // A new Object object
let b = new String(); // A new String object
let c = new Number(); // A new Number object
let d = new Boolean(); // A new Boolean object

const name = new String("Abhaya");
console.log(name);

const number = new Number(57);
console.log(number);

const count = new Boolean(true);
console.log(count);
