//ES6:

const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name){
  return name.toUpperCase();
});

//With arrow function
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase());
  
//Babel-ES5:
'use strict';

var upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function (name) {
  return name.toUpperCase();
});

/*
 * Programming Quiz: Convert Function into an Arrow Function (2-1)
 */

// convert to an arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => {return square*square;});

console.log(...squares);

//Output:
/*
1
4
9
16
25
36
49
64
81
100
*/

const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg','Nepal','Shngapore','Uganda','Zimbabwe'];
const longNames = names.filter(function(name){
return name.length >6;
});
//With arrow function:
const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg','Nepal','Shngapore','Uganda','Zimbabwe'];
const longNames = names.filter(name =>name.length >6);

// Babel-ES5:
'use strict';

var names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Shngapore', 'Uganda', 'Zimbabwe'];
var longNames = names.filter(function (name) {
  return name.length > 6;
});

// empty parameter list requires parentheses
const sayHi = ()=>console.log('Hello Udacity Student!');
sayHi();
//Output:
/*
"Hello Udacity Student!"
*/

//Babel-ES5:
'use strict';

var sayHi = function sayHi() {
  return console.log('Hello Udacity Student!');
};
sayHi();
//Output:
/*
"Hello Udacity Student!"
*/

// multiple parameters require parentheses
const orderIceCream = (flavor,cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');

//Output:
/*
"Here's your chocolate ice cream in a waffle cone."
*/



