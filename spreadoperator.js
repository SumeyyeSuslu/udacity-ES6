//ES6:
const books= ["Don Quixote","The Hobbit","Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

//Output:
/*
"Don Quixote"
"The Hobbit"
"Alice in Wonderland"
"Tale of Two Cities"
*/

//Babel - ES5:
"use strict";

var _console;

var books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
(_console = console).log.apply(_console, books);

//Output:
"Don Quixote" "The Hobbit" "Alice in Wonderland" "Tale of Two Cities"
