//ES6:
/*
* Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
*/
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits, ...vegetables];
console.log(produce);

//Output:
/*
["apples", "bananas", "pears", "corn", "potatoes", "carrots"]
*/
 
 //ES5:
 "use strict";

var fruits = ["apples", "bananas", "pears"];
var vegetables = ["corn", "potatoes", "carrots"];
var produce = [].concat(fruits, vegetables);
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
