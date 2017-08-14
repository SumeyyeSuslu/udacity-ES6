//ES6
const point = [10,25,-34];
const [x,y,z] = point;
console.log(x,y,z);

//Output:
10
25
-34

//Babel- ES5
"use strict";

var point = [10, 25, -34];
var x = point[0],
    y = point[1],
    z = point[2];

console.log(x, y, z);

//Output:
10 25 -34
