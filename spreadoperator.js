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
/*
"Don Quixote" "The Hobbit" "Alice in Wonderland" "Tale of Two Cities"
*/
//ES6
const primes = new Set([2,3,5,7,11,13,17,1923,29]);
console.log(...primes);

//Output:
/*
2
3
5
7
11
13
17
1923
29
*/

"use strict";

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var primes = new Set([2, 3, 5, 7, 11, 13, 17, 1923, 29]);
(_console = console).log.apply(_console, _toConsumableArray(primes));

//Output:
/*
2 3 5 7 11 13 17 1923 29
*/
