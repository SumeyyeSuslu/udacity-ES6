//ES6:
/* Create buildHouse() function that accepts an object as a
default parameter. The object should set the following 
properties to these default values:
floors = 1
color = 'red'
walls = 'brick'
The function should return the following if no arguments or
any empty object is passed to the function:
Your house has 1 floor(s) with red brick walls.
*/
function buildHouse({floors=1, color=['red'], walls=['brick']} = {}){
  return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}
console.log(buildHouse());
console.log(buildHouse({}));
console.log(buildHouse({floors:3, color:'yellow'}));

//Output:
"Your house has 1 floor(s) with red brick walls."
"Your house has 1 floor(s) with red brick walls."
"Your house has 3 floor(s) with yellow brick walls."

//Babel - ES5:
'use strict';

/* Create buildHouse() function that accepts an object as a
default parameter. The object should set the following 
properties to these default values:
floors = 1
color = 'red'
walls = 'brick'
The function should return the following if no arguments or
any empty object is passed to the function:
Your house has 1 floor(s) with red brick walls.
*/
function buildHouse() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$floors = _ref.floors,
      floors = _ref$floors === undefined ? 1 : _ref$floors,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? ['red'] : _ref$color,
      _ref$walls = _ref.walls,
      walls = _ref$walls === undefined ? ['brick'] : _ref$walls;

  return 'Your house has ' + floors + ' floor(s) with ' + color + ' ' + walls + ' walls.';
}
console.log(buildHouse());
console.log(buildHouse({}));
console.log(buildHouse({ floors: 3, color: 'yellow' }));

