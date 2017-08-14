//ES6:
const digits = [0,1,2,3,4,5,6,7,8,9];
for (const index in digits){
  console.log(digits[index]);
}
//Output:
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
for (var index in digits) {
  console.log(digits[index]);
}
