/**
 * Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.
 * The elements in a Map are inserted in an insertion order.
 * However, unlike an object, a map can contain objects, functions and other data types as key.
 */

// create a Map:
const map1 = new Map(); // an empty map
console.log(map1); // Map {}

// Insert Item to Map:
// After you create a map, you can use the set() method to insert elements to it.
let map2 = new Map();

// insert key-value pair:
map2.set("info", { name: "Abhaya", age: 26 });
console.log(map2); // Map {"info" => {name: "Jack", age: 26}}

//also use objects or functions as keys.
let map3 = new Map();

let obj = {};
map3.set(obj, { name: "Abhaya", age: "26" });

console.log(map3); // Map {{} => {name: "Jack", age: "26"}}

//Access Map Elements:
// You can access Map elements using the get() method.
console.log(map2.get("info")); // {name: "Abhaya", age: "26"}

//Check Map Elements:
// You can use the has() method to check if the element is in a Map.
console.log(map2.has("info")); // true

//Removing Elements:
// You can use the clear() and the delete() method to remove elements from a Map.
// The delete() method returns true if a specified key/value pair exists and has been removed or else returns false.
map2.delete("address"); // false
console.log(map2); // Map {"info" => {name: "Jack", age: "26"}}

map2.delete("info"); // true
console.log(map2); // Map {}

// removing all element:
map1.clear();
console.log(map1); // Map {}

//Map Size:
console.log(map2.size); // 1

// Iterate Through a Map:
// You can iterate through the Map elements using the for...of loop or forEach() method.
// The elements are accessed in the insertion order.
let map4 = new Map();
map4.set("name", "Jack");
map4.set("age", "27");

// looping through Map:
for (let [key, value] of map4) {
  console.log(key + "- " + value);
}

//You could also get the same results as the above program using the forEach() method.
map4.forEach(function (value, key) {
  console.log(key + "- " + value);
});

// Iterate Over Map Keys & Values:
// You can iterate over the Map and get the key using the keys() method.
for (let key of map2.keys()) {
  console.log(key);
}

for (let values of map2.values()) {
  console.log(values);
}

// Get Key/Values of Map:
// You can iterate over the Map and get the key/value of a Map using the entries() method.
for (let elem of map2.entries()) {
  console.log(`${elem[0]}: ${elem[1]}`);
}

/*
    JavaScript Map vs Object
            Map:	                                                          |        Object:
        1. Maps can contain objects and other data types as keys.	          |  1. Objects can only contain strings and symbols as keys.
        2. Maps can be directly iterated and their value can be accessed.	  |  2. Objects can be iterated by accessing its keys.
        3. The number of elements of a Map can be determined by size property.|  3. The number of elements of an object needs to be determined manually.
        4. Map performs better for programs that require the addition or      |  4. Object does not perform well if the program requires the addition or
            removal of elements frequently.                                   |      removal of elements frequently.
*/

// WeakMap:
// The WeakMap is similar to a Map. However, WeakMap can only contain objects as keys.
const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {}
let obj1 = {};
// adding object (element) to WeakMap
weakMap.set(obj1, "hello");
console.log(weakMap); // WeakMap {{} => "hello"}

//WeakMap Methods:
// WeakMaps have methods get(), set(), delete(), and has().
// adding object (element) to WeakMap
weakMap.set(obj1, "hello");

console.log(weakMap); // WeakMap {{} => "hello"}

// get the element of a WeakMap
console.log(weakMap.get(obj1)); // hello

// check if an element is present in WeakMap
console.log(weakMap.has(obj1)); // true

// delete the element of WeakMap
console.log(weakMap.delete(obj1)); // true

console.log(weakMap); // WeakMap {}

// looping through WeakMap
for (let i of weakMap) {
  console.log(i); // TypeError
}
