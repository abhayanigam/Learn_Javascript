/**
 * Creating Date Objects:
    There are four ways to create a date object.

    new Date()
    new Date(milliseconds)
    new Date(Date string)
    new Date(year, month, day, hours, minutes, seconds, milliseconds)
 */

// new Date()
// You can create a date object using the new Date() constructor.
const timeNow = new Date();
console.log(timeNow); // shows current date and time

/*
    new Date(milliseconds)
        The Date object contains a number that represents 
        milliseconds since 1 January 1970 UTC.
        new Date(milliseconds) creates a new date object by adding
        the milliseconds to the zero time.
*/
const time1 = new Date(0);
console.log(time1);
const time2 = new Date(100000000000);
console.log(time2);

//Note: 1000 milliseconds is equal to 1 second.

// new Date(date string) : new Date(date string) creates a new date object from a date string.
const date = new Date("2021-12-31");
console.log(date);

//You can also pass only the year and month or only the year
const newdate = new Date("2021-12");
console.log(newdate);

const date1 = new Date("2021");
console.log(date1);

//Short and Long date format:

// short date format "MM/DD/YYYY"
const date0 = new Date("31/12/2021");
console.log(date0);

// long date format "MMM DD YYYY"
const date01 = new Date("Dec 31 2021");
console.log(date01);

// month and day can be in any order
const date2 = new Date("31 Dec 2021");
console.log(date2);

// month can be full or abbreviated. Also month names are insensitive.
// comma are ignored
const date3 = new Date("Dec 31 2021");
console.log(date3);

const date4 = new Date("Dec, 31, 2021");
console.log(date4);

//new Date(year, month, day, hours, minutes, seconds, milliseconds)
const time3 = new Date(2020, 1, 20, 4, 12, 11, 0);
console.log(time3);

// Example: Date Methods:
const timeInMilliseconds = Date.now();
console.log(timeInMilliseconds); // 1593765214488

const time = new Date();

// get day of the month
const date03 = time.getDate();
console.log(date03);

// get day of the week
const year = time.getFullYear();
console.log(year);

const utcDate = time.getUTCDate();
console.log(utcDate);

const event = new Date("Feb 19, 2020 23:15:30");
// set the date
event.setDate(15);
console.log(event.getDate());

// Only 28 days in February!
event.setDate(35);

console.log(event.getDate());

// Formatting a Date:
const currentDate = new Date();

// show in specific format
let monthDateYear =
  currentDate.getMonth() +
  1 +
  "/" +
  currentDate.getDate() +
  "/" +
  currentDate.getFullYear();

console.log(monthDateYear); // 7/3/2020
