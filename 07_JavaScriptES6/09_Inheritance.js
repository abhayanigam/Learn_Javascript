/**
 * Class Inheritance:
 * Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.
 * Using class inheritance, a class can inherit all the methods and properties of another class.
 * Inheritance is a useful feature that allows code reusability.
 * To use class inheritance, you use the extends keyword.
 */

// parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

// inheriting parent class
class Student extends Person {
  //super() keyword: The super keyword used inside a child class denotes its parent class.

  constructor(name) {
    console.log("Creating student class");
    // call the super class constructor and pass in the name parameter
    super(name);
    // Overriding an occupation property
    this.occupation = "Student";
  }

  // overriding Person's method
  greet() {
    console.log(`Hello student ${this.name}.`);
    console.log("occupation: " + this.occupation);
  }
}

let student1 = new Student("Abhaya");
student1.greet();

let p = new Student("Vedanshi");
p.greet();

/**
 * Uses of Inheritance:
 * Since a child class can inherit all the functionalities of
    the parent's class, this allows code reusability.

 * Once a functionality is developed, you can simply inherit it. 
    No need to reinvent the wheel. This allows for cleaner code and easier to maintain.

 * Since you can also add your own functionalities in the child class,
     you can inherit only the useful functionalities and define other required features.
 */
