/**
 * Set is similar to an array that allows us to store multiple items like numbers,
 *  strings, objects, etc. However, unlike an array, a set cannot contain duplicate values.
 *
 * Create JavaScript Set:
 * To create a Set, you need to use the new Set() constructor.
 */

const set1 = new Set();
console.log(set1); // Set {}
const set2 = new Set([1, "hello", { count: true }]);
console.log(set2); // Set {1, "hello", {count: true}}

//When duplicate values are passed to a Set object, the duplicate values are excluded.
const set3 = new Set([1, 1, 2, 2]);
console.log(set3); // Set {1, 2}

/**
 * Access Set Elements
 * You can access Set elements using the values() method and check
 * if there is an element inside Set using has() method.
 */
console.log(set1.values());
console.log(set1.has(1));

// Adding New Elements
const set = new Set([1, 2]);
console.log(set.values());

// adding new elements
set.add(3);
console.log(set.values());

/**
 * Removing Elements
 * You can use the clear() and the delete() method to remove elements from a Set.
 */
// removing a particular element
set.delete(2);
console.log(set.values()); // Set Iterator [1, 3]

// remove all elements of Set
set.clear();
console.log(set.values()); // Set Iterator []

//Iterate Sets
// looping through Set
for (let i of set) {
  console.log(i);
}

/**
 * WeakSet
 * The WeakSet is similar to a Set. However, WeakSet can only contain objects whereas
 *  a Set can contain any data types such as strings, numbers, objects, etc.
 *
 * Note : When you try to add other data types besides objects, WeakSet throws an error.
 */
const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}
let obj = {
  message: "Hi",
  sendMessage: true,
};

// adding object (element) to WeakSet
weakSet.add(obj);
console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}

// trying to add string to WeakSet
// weakSet.add("hello");

// throws error
// TypeError: Attempted to add a non-object key to a WeakSet
// console.log(weakSet);

/**
 * WeakSet Methods :
 * WeakSets have methods add(), delete(), and has().
 */
console.log(weakSet); // WeakSet {}

const obj1 = { a: 1 };

// add to a weakSet
weakSet.add(obj1);
console.log(weakSet); // WeakSet {{a: 1}}

// check if an element is in Set
console.log(weakSet.has(obj1)); // true

// delete elements
weakSet.delete(obj1);
console.log(weakSet); // WeakSet {}

/**
 * WeakSets Are Not iterable
 * Unlike Sets, WeakSets are not iterable.
        // looping through WeakSet
        for (let i of weakSet) {
        // TypeError
        console.log(i);
        }
*/

// Example: Set Union , Intersection, Difference & Subset Operation:
function union(a, b) {
  let unionSet = new Set(a);
  for (let i of b) {
    unionSet.add(i);
  }
  return unionSet;
}

function intersection(setA, setB) {
  let intersectionSet = new Set();

  for (let i of setB) {
    if (setA.has(i)) {
      intersectionSet.add(i);
    }
  }
  return intersectionSet;
}

function difference(setA, setB) {
  let differenceSet = new Set(setA);
  for (let i of setB) {
    differenceSet.delete(i);
  }
  return differenceSet;
}

// true if all elements of set b is in set a
function subset(setA, setB) {
  for (let i of setB) {
    if (!setA.has(i)) {
      return false;
    }
  }
  return true;
}

let setA = new Set(["apple", "mango", "orange"]);
let setB = new Set(["grapes", "apple", "banana"]);

let result = union(setA, setB);
console.log(result);

let result1 = intersection(setA, setB);
console.log(result1);

let result2 = difference(setA, setB);
console.log(result);

let result3 = subset(setA, setB);
console.log(result);
