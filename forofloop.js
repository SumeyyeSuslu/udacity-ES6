//ES6:
const names = ['James','Karita','Richard'];
for (const name of names){
  console.log(name);
}

//Output:
/*
"James"
"Karita"
"Richard"
*/

//Babel-ES5:
'use strict';

var names = ['James', 'Karita', 'Richard'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var name = _step.value;

    console.log(name);
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
"James"
"Karita"
"Richard"
*/
