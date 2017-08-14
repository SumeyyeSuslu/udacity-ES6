//ES6
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};
const {type,color,karat} = gemstone;
console.log(type, color, karat);

//Output:
/*
"quartz"
"rose"
21.29
*/

//Babel-ES5:

'use strict';

var gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};
var type = gemstone.type,
    color = gemstone.color,
    karat = gemstone.karat;

console.log(type, color, karat);

//Output:
/*
"quartz" "rose" 21.29
*/

//ES6
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};
let {color} = gemstone;
console.log(color);
//Output:
/*
"rose"
*/

//Babel-ES5:

'use strict';

var gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};
var color = gemstone.color;

console.log(color);
//Output:
/*
"rose"
*/
