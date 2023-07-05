// Creating Multidimensional Array

// Example 1:
let vidhyaarti = [
  ["Abhaya", 24],
  ["Vedanshi", 23],
  ["Nigam", 24],
];
console.log(vidhyaarti);

// Example 2:
let student1 = ["Abhaya", 24];
let student2 = ["Vedanshi", 23];
let student3 = ["Nigam", 24];

// multidimensional array
let vidhyaarti1 = [student1, student2, student3];
console.log(vidhyaarti1);

//Access Elements of an Array
console.log(vidhyaarti[1]); // ['Vedanshi', 24]
console.log(vidhyaarti[0][0]); // 'Abhaya'
console.log(vidhyaarti[2][1]); // 24)

//Adding Element to the Outer Array
vidhyaarti.push(["Peter", 24]);
console.log(vidhyaarti);

// Adding Element to the Inner Array
vidhyaarti[1][2] = "hello";
console.log(vidhyaarti);

// using push()
vidhyaarti[1].push("hello");
console.log(vidhyaarti);

// adding element at 1 index
// Array's splice() method to add an element at a specified index.
vidhyaarti.splice(1, 0, ["Peter", 24]);
console.log(vidhyaarti);

// remove the array element from outer array
vidhyaarti.pop();
console.log(vidhyaarti);

// remove the element from the inner array
vidhyaarti[1].pop();
console.log(vidhyaarti);

// removing 1 index array item
vidhyaarti.splice(1, 1);
console.log(vidhyaarti);

let vidhyaarti = [
  ["Jack", 24],
  ["Sara", 23],
];

// iterating over the vidhyaarti
// Array's forEach() method to iterate over the multidimensional array.
vidhyaarti.forEach((student) => {
  // student.forEach((data) => {
  // console.log(data);
  console.log(student);
  // });
});

// for...of loop to iterate over the multidimensional array
for (let i of studentsData) {
  for (let j of i) {
    console.log(j);
  }
}

// for loop to iterate over a multidimensional array
for (let i = 0; i < studentsData.length; i++) {
  let innerArrayLength = studentsData[i].length;
  for (let j = 0; j < innerArrayLength; j++) {
    console.log(studentsData[i][j]);
  }
}
