/*
    Benefit of Using Symbols in Object
        If the same code snippet is used in various programs,
        then it is better to use Symbols in the object key. 
        It's because you can use the same key name in different codes and avoid duplication issues.
    
    JavaScript Symbol:
        The JavaScript ES6 introduced a new primitive data type called Symbol. 
        Symbols are immutable (cannot be changed) and are unique.
*/
// two symbols with the same description
const value1 = Symbol("hello");
const value2 = Symbol("hello");

console.log(value1 === value2); // false
// Though value1 and value2 both contain the same description, they are different.

//Access Symbol Description
const x = Symbol("hey");
console.log(x); // Symbol(hey)

const x1 = Symbol("hey");
console.log(x1.description); // hey

//Add Symbol as an Object Key
let id = Symbol("id");

let person = {
  name: "Jack",
  [id]: 123, // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}

// Symbols are not included in for...in Loop
// The for...in loop does not iterate over Symbolic properties.
for (let key in person) {
  console.log(key);
}

let person1 = {
  name: "Jack",
};

// using string as key
person1.id = 12;
console.log(person1.id); // 12

// Another program overwrites value
person1.id = "Another value";
console.log(person1.id); // Another value
