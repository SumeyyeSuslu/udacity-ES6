//ES6:
const digits = [0,1,2,3,4,5,6,7,8,9];
for ( let i=0; i<digits.length; i++){
  console.log(digits[i]);
}

Output:
/*
0
1
2
3
4
5
6
7
8
9
*/

//Babel-ES5:
"use strict";

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
