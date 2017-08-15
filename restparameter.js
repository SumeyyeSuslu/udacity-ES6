//ES6:
const order = [20.17, 18.67,1.50, "cheese","eggs","milk","bread"];
const [total, subtotal,tax,...items] = order;
console.log(total,subtotal,tax,items);

//Output:
/*
20.17
18.67
1.5
["cheese", "eggs", "milk", "bread"]
*/

//Babel - ES5:
"use strict";

var order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
var total = order[0],
    subtotal = order[1],
    tax = order[2],
    items = order.slice(3);

console.log(total, subtotal, tax, items);

//Output:
/*
20.17 18.67 1.5 Array [
  "cheese",
  "eggs",
  "milk",
  "bread"
]
*/
