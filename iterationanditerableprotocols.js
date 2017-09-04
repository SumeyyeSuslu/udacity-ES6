//ES6:
const digits =  [0,1,2,3,4,5,6,7,8,9];
const arrayIterator = digits[Symbol.iterator]();
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

//Output:

Console Run  Clear
[object Object] {
  done: false,
  value: 0
}
[object Object] {
  done: false,
  value: 1
}
[object Object] {
  done: false,
  value: 2
}

//Babel- ES5:
"use strict";

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayIterator = digits[Symbol.iterator]();
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
