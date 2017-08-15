//ES6:
const digits = [0,1,2,3,4,5,6,7,8,9];
for ( const digit of digits){
  if (digit % 2 === 0){
    continue;
  }
  console.log(digit);
}

//Output:
/*
1
3
5
7
9
*/

//Babel-ES5:
"use strict";

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = digits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var digit = _step.value;

    if (digit % 2 === 0) {
      continue;
    }
    console.log(digit);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

//Output:
/*
1
3
5
7
9
*/
