/**
 * As our program grows bigger, it may contain many lines of code.
 * Instead of putting everything in a single file, you can use modules
 * to separate codes in separate files as per their functionality.
 * This makes our code organized and easier to maintain.
 * Module is a file that contains code to perform a specific task.
 * A module may contain variables, functions, classes etc.
 */

// exporting a function
export function greetPerson(name) {
  return `Hello ${name}`;
}
