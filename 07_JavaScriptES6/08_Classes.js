/**
 * A class is a blueprint for the object. You can create an object from the class.
 * You can think of the class as a sketch (prototype) of a house.
 * It contains all the details about the floors, doors, windows, etc.
 * Based on these descriptions, you build the house. House is the object.
 * Since many houses can be made from the same description, we can create many objects from a class.
 */

/**
 * Note :
 *      The constructor function is defined as:
            // constructor function
            function Person () {
                this.name = 'John',
                this.age = 23
            }

            // create an object
            const person1 = new Person();
        Instead of using the function keyword, you use the class keyword for creating JS classes.
 */
// creating a class
class Person {
  /**
   * Note: The constructor() method inside a class gets called automatically each
   * time an object is created.
   */
  constructor(name) {
    this.name = name;
  }

  // It is easy to define methods in the JavaScript class.
  // You simply give the name of the method followed by ().
  greet() {
    console.log(`Hello ${this.name}`);
  }

  //Getters and Setters
  get personName() {
    return this.name;
  }

  // setter
  set personName(x) {
    this.name = x;
  }
}
// creating an object
const person1 = new Person("Abhaya");
const person2 = new Person("Vedanshi");

console.log(person1.name); // Abhaya
console.log(person2.name); // Vedanshi

person1.greet();

person1.personName = "Nigam";
console.log(person1.name); // Nigam

/**
 * Note: JavaScript class is a special type of function.
 *  And the typeof operator returns function for a class.

        For example,
            class Person {}
            console.log(typeof Person); // function
 */
