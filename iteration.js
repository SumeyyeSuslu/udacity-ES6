//ES6:

const years = ['1999','2001','2013','2016'];
for (const i=0; i<years.length; i++){
  console.log(years[i]);
}

//Output:
/*
"1999"
"error"
"TypeError: Assignment to constant variable.
    at cazekefuyo.js:2:99
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"
*/

const years = ['1999','2001','2013','2016'];
for (let i=0; i<years.length; i++){
  console.log(years[i]);
}

//Output:
/*
"1999"
"2001"
"2013"
"2016"
*/

//Babel-ES5:
'use strict';

var years = ['1999', '2001', '2013', '2016'];
for (var i = 0; i < years.length; i++) {
  console.log(years[i]);
}

//Output:
/*
"1999"
"2001"
"2013"
"2016"
*/
