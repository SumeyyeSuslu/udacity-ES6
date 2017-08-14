//ES6:
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};
const type = gemstone.type;
const color = gemstone.color;
const karat = gemstone.karat;
console.log(type,color,karat);

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
var type = gemstone.type;
var color = gemstone.color;
var karat = gemstone.karat;
console.log(type, color, karat);

//Output:
"quartz" "rose" 21.29
