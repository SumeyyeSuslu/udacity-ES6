//ES6
let positions = ['Gabrielle', 'Jarrod', 'Kate','Fernando','Mike','Walter'];
let [first,second,third] = positions;
console.log(first,second,third);
//Output:
/*
"Gabrielle"
"Jarrod"
"Kate"
*/

//Babel-ES5:
'use strict';

var positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
var first = positions[0],
    second = positions[1],
    third = positions[2];

console.log(first, second, third);

//Output:
/*
"Gabrielle" "Jarrod" "Kate"
*/
