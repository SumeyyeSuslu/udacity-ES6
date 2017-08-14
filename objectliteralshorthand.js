//ES6
let type = 'quartz';
let color = 'rose';
let carat = 21.29;
const gemstone = {
  type:type,
  color:color,
  carat:carat
};
console.log(gemstone);

//Output:
/*
[object Object] {
  carat: 21.29,
  color: "rose",
  type: "quartz"
}
*/
//shorthand:You can remove duplicate variables names from object properties if the properties have the same name as the variables being assigned to them.
let type = 'quartz';
let color = 'rose';
let carat = 21.29;
let gemstone = {type,color,carat};
console.log(gemstone);

//Output:
/*
[object Object] {
  carat: 21.29,
  color: "rose",
  type: "quartz"
}
*/

//Babel - ES5:
'use strict';

var type = 'quartz';
var color = 'rose';
var carat = 21.29;
var gemstone = {
  type: type,
  color: color,
  carat: carat
};
console.log(gemstone);

//Output:
/*
Object {
  "carat": 21.29,
  "color": "rose",
  "type": "quartz"
}
*/
