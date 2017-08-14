//ES6
/*
* Programming Quiz:Destructuring Arrays
*
* Use destructuring to initialize the variables `one`, `two` and `three`
* with the colors from the `things` array
*/
const things = ['red', 'basketball', 'paperclip','green','computer','earth','udacity','blue','dogs'];
const [one, , ,two, , , ,three] = things;
const colors = `List of colors
1. ${one}
2. ${two}
3. ${three}`;
console.log(colors);

//Output:
/*
"List of colors
1. red
2. green
3. blue"
*/

//Babel-ES5:
'use strict';

/*
* Programming Quiz:Destructuring Arrays
*
* Use destructuring to initialize the variables `one`, `two` and `three`
* with the colors from the `things` array
*/
var things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];
var one = things[0],
    two = things[3],
    three = things[7];

var colors = 'List of colors\n1. ' + one + '\n2. ' + two + '\n3. ' + three;
console.log(colors);
//Output:
/* 
"List of colors
1. red
2. green
3. blue"
*/
