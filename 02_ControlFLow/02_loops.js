// Loops

//Display Sum of n Natural Numbers Using For Loop

let sum = 0;
let sum1 = 0;
let num = 100;

for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log(`The sum is ${sum}`);

// Reverse For loop
for (let i = num; i >= 1; i--) {
  sum1 += i;
}
console.log("sum1:", sum1);

// While Loop
// Sum of Positive Numbers Only
let sum2 = 0;
let number = parseInt(prompt("Enter a number: "));

while (number >= 0) {
  sum2 += number;
  number = parseInt(prompt("Enter a number: "));
}
console.log(`The sum2 is ${sum2}.`);

// do While Loop
// Sum of Positive Numbers

let sum3 = 0;
let number2 = 0;

do {
  sum3 += number2;
  number2 = parseInt(prompt("Enter a number: "));
} while (number2 >= 0);

console.log(`The sum is ${sum3}.`);

/*
    Note :
        for Vs while Loop
        A for loop is usually used when the number of iterations is known.
        And while and do...while loops are usually used when the number of
        iterations are unknown.
*/
