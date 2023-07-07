/**
 * Iterables and Iterators:
    JavaScript provides a protocol to iterate over data structures. 
    This protocol defines how these data structures are iterated over using the for...of loop.

    The concept of the protocol can be split into:
        iterable
        iterator

    The iterable protocol mentions that an iterable should have the Symbol.
    iterator key.

    JavaScript Iterables:
        The data structures that have the Symbol.iterator() method are called iterables.
        For example, Arrays, Strings, Sets, etc.

    JavaScript Iterators:
        An iterator is an object that is returned by the Symbol.iterator() method.

    The iterator protocol provides the next() method to access each element of the iterable (data structure) one at a time.
 */

// Iterate Through Iterables:
// You can use the for...of loop to iterate through these iterable objects. You can iterate through the Symbol.iterator() method
const number = [1, 2, 3];

for (let n of number[Symbol.iterator]()) {
  console.log(n);
}

/**
 * next() Method
    The iterator object has a next() method that returns the next item in the sequence.

    The next() method contains two properties: value and done.

    value:
        The value property can be of any data type and represents the current value in the sequence.
    
    done:
        The done property is a boolean value that indicates whether the iteration is complete or not.
        If the iteration is incomplete, the done property is set to false, else it is set to true.
 */

const arr = ["h", "e", "l", "l", "o"];

let arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next()); // {value: "h", done: false}
console.log(arrIterator.next()); // {value: "e", done: false}
console.log(arrIterator.next()); // {value: "l", done: false}
console.log(arrIterator.next()); // {value: "l", done: false}
console.log(arrIterator.next()); // {value: "o", done: false}
console.log(arrIterator.next()); // {value: undefined, done: true}

// User Defined Iterator:
function displayElements(arr) {
  // to update the iteration
  let n = 0;

  return {
    // implementing the next() function
    next() {
      if (n < arr.length) {
        return {
          value: arr[n++],
          done: false,
        };
      }

      return {
        value: undefined,
        done: true,
      };
    },
  };
}

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
