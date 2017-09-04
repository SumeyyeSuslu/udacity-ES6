//ES6:
const colors=new Set(['red','orange','yellow','green','blue','violet','brown','black']);
for (const color of colors){
  console.log(color);
}

//Output:
"red"
"orange"
"yellow"
"green"
"blue"
"violet"
"brown"
"black"

//Babel - ES5:
'use strict';

var colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = colors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var color = _step.value;

    console.log(color);
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
