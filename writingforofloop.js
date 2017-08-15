//ES6:
//Write a for of loop that: loop through each day in the days array, capitalizes the first letter of the day, and prints the day out to the console.
const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
for (const day of days){
  console.log(day.charAt(0).toUpperCase() + day.slice(1));
}

//Output:
/*
"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
*/

//Babel - ES5:
'use strict';

var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = days[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var day = _step.value;

    console.log(day.charAt(0).toUpperCase() + day.slice(1));
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
"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
*/
