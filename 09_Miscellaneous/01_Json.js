/**
 * JSON stands for Javascript Object Notation.
 * JSON is a text-based data format that is used to store and transfer data. 
        // JSON syntax
        {
            "name": "John",
            "age": 22,
            "gender": "male",

        }
    In JSON, the data are in key/value pairs separated by a comma ,.
    JSON was derived from JavaScript.
    So, the JSON syntax resembles JavaScript object literal syntax.
    However, the JSON format can be accessed and be created
    by other programming languages too.

    Note: 
        JavaScript Objects and JSON are not the same.

    JSON Data:
        JSON data consists of key/value pairs similar to JavaScript object properties.
        The key and values are written in double quotes separated by a colon :. 
        
        // JSON data
        "name": "John"
        
    Note: JSON data requires double quotes for the key.

    JSON Object:
        The JSON object is written inside curly braces { }. 
        JSON objects can contain multiple key/value pairs.

        // JSON object
        { "name": "John", "age": 22 }
    
    JSON Array
        JSON array is written inside square brackets [ ].

        // JSON array
        [ "apple", "mango", "banana"]

        // JSON array containing objects
        [
            { "name": "John", "age": 22 },
            { "name": "Peter", "age": 20 }.
            { "name": "Mark", "age": 23 }
        ]

    Note: JSON data can contain objects and arrays. 
        However, unlike JavaScript objects, 
        JSON data cannot contain functions as values.
 */

//Accessing JSON Data:
const data = {
  name: "Abhaya",
  age: 22,
  hobby: {
    reading: true,
    gaming: false,
    sport: "football",
  },
  class: ["JavaScript", "HTML", "CSS"],
};
console.log(data.name); // Abhaya
console.log(data["name"]); // Abhaya (You can also do like this.)

console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}
console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML

/*
    JavaScript Objects VS JSON :
        Though the syntax of JSON is similar to the JavaScript object, 
        JSON is different from JavaScript objects.

                        JSON	                                 |              JavaScript Object
    The key in key/value pair should be in double quotes.	     |   The key in key/value pair can be without double quotes.
    JSON cannot contain functions.	                             |   JavaScript objects can contain functions.
    JSON can be created and used by other programming languages. | 	 JavaScript objects can only be used in JavaScript.
*/

//TODO: Important
// Converting JSON to JavaScript Object:
// You can convert JSON data to a JavaScript object using the built-in JSON.parse() function.

// json object
const jsonData = '{ "name": "Abhaya", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);
console.log(obj.name); // Abhaya

// Converting JavaScript Object to JSON
// You can also convert JavaScript objects to JSON format using the
// JavaScript built-in JSON.stringify() function.

// JavaScript object
const jsData = { name: "Abhaya", age: 22 };

// converting to JSON
const jsObj = JSON.stringify(jsData);
console.log(jsObj); // "{"name":"Abhaya","age":22}"
