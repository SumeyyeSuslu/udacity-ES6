//ES6:
// when you need to an extra method to an array (or another object). loop over all enumerable properties to the array's prototype, then those properties will appear in the loop.
Array.prototype.decimalfy = function(){
  for ( let i=0; i<this.length;i++){
    this[i] = this[i].toFixed(2);
  }
};
const digits =[0,1,2,3,4,5,6,7,8,9];
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
function (){
{;window.runnerWindow.protect.protect({ line: 2, reset: true }); for ( let i=0; i
*/

//Babel-ES5:
"use strict";

Array.prototype.decimalfy = function () {
  for (var i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};
var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var index in digits) {
  console.log(digits[index]);
}

//Output:
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
[Function anonymous]
