//ES6 -  Defaults and Destructuring Arrays: 

// Since the function was called without passing an array, it breaks.
function createGrid([width=5, height=5]){
  return `Generates a ${width}*${height} grid`;
}
createGrid([]); // Generates a 5*5 grid
createGrid([2]); // Generates a 2*5 grid
createGrid([2,3]); //Generates a 2*3 grid
createGrid([undefined,3]); // Generates a 5*3 grid
createGrid(); // "error"

// Babel - ES5:
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function createGrid(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      _ref2$ = _ref2[0],
      width = _ref2$ === undefined ? 5 : _ref2$,
      _ref2$2 = _ref2[1],
      height = _ref2$2 === undefined ? 5 : _ref2$2;

  return "Generates a " + width + "*" + height + " grid";
}
createGrid([]); // Generates a 5*5 grid
createGrid([2]); // Generates a 2*5 grid
createGrid([2, 3]); //Generates a 2*3 grid
createGrid([undefined, 3]); // Generates a 5*3 grid
createGrid(); // "error"


//ES6 - Using default function parameters to solve the problem:
function createGrid([width=5, height=5]=[]){
  return 'Generating a grid of ${width} by ${height}';
}
createGrid(); // Generating a grid of 5 by 5

//Babel - ES5:
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function createGrid() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
      _ref2 = _slicedToArray(_ref, 2),
      _ref2$ = _ref2[0],
      width = _ref2$ === undefined ? 5 : _ref2$,
      _ref2$2 = _ref2[1],
      height = _ref2$2 === undefined ? 5 : _ref2$2;

  return 'Generating a grid of ${width} by ${height}';
}
createGrid(); // Generating a grid of 5 by 5

//ES6 - Example:
function houseDescriptor([houseColor='green', shutterColors=['red']]){
  return `I have a ${houseColor} house with ${shutterColors.join ('and')} shutters`;
}

houseDescriptor(['green', ['white', 'gray', 'pink']]);
houseDescriptor(['green']);

//Babel - ES5:
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function houseDescriptor(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      _ref2$ = _ref2[0],
      houseColor = _ref2$ === undefined ? 'green' : _ref2$,
      _ref2$2 = _ref2[1],
      shutterColors = _ref2$2 === undefined ? ['red'] : _ref2$2;

  return 'I have a ' + houseColor + ' house with ' + shutterColors.join('and') + ' shutters';
}

houseDescriptor(['green', ['white', 'gray', 'pink']]);
houseDescriptor(['green']);
