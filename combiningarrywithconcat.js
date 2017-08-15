//ES6:
const fruits = ["apples", "bananas","pears"];
const vegetables = ["corn","potatoes","carrots"];
const produce = fruits.concat(vegetables);
console.log(produce);

//Output:
/*
["apples", "bananas", "pears", "corn", "potatoes", "carrots"]
*/

//Babel-ES5:
"use strict";

var fruits = ["apples", "bananas", "pears"];
var vegetables = ["corn", "potatoes", "carrots"];
var produce = fruits.concat(vegetables);
console.log(produce);

//Output:
/*
Array [
  "apples",
  "bananas",
  "pears",
  "corn",
  "potatoes",
  "carrots"
]
*/
