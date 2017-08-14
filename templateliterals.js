//ES6
const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr.Kalehoff'
};
const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}
let message = student.name + ' please see ' + teacher.name + ' in' + teacher.room + ' to pick up your report card';
console.log(message);

//Output:
//"Richard Kalehoff please see Mrs. Wilson inN231 to pick up your report card"

//Using Backtick- ES6
const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr.Kalehoff'
};
const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}
let message = `${student.name} please see ${teacher.name}in ${teacher.room} to pick up your report card`;
console.log(message);

//Output:
//"Richard Kalehoff please see Mrs. Wilsonin N231 to pick up your report card""Richard Kalehoff please see Mrs. Wilsonin N231 to pick up your report card"

//Babel-ES5
'use strict';

var student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr.Kalehoff'
};
var teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
};
var message = student.name + ' please see ' + teacher.name + 'in ' + teacher.room + ' to pick up your report card';
console.log(message);

//Output:

//"Richard Kalehoff please see Mrs. Wilsonin N231 to pick up your report card"
