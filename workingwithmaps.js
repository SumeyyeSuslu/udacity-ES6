//ES6:
//.has() method to check key-value pair exists in your Map.
const members= new Map();
members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);
console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

//Output:
false
true

// Retrieve values from a Map, by .get() method.
console.log(members.get('Evelyn'));

//Output:
75.68

// Babel - ES5:
'use strict';

var members = new Map();
members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);
console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

// Looping through Maps: .keys(), .values()
let iteratorObjForKeys = members.keys();
  iteratorObjForKeys.next();

let iteratorObjForValues = members.values();
  iteratorObjForValues.next();
  
// Using a for-of loop:
for ( const member of members){
  console.log(member);
}

//Output:
["Evelyn", 75.68]
["Liam", 20.16]
["Sophia", 0]
["Marcus", 10.25]

// Using array destructuring to print keys and values of the members.
for ( const member of members){
  //console.log(member);
  [key, value] = member;
  console.log(key, value);
}

//Output:
"Evelyn"
75.68
"Liam"
20.16
"Sophia"
0
"Marcus"
10.25

// Using for-each loop:
members.forEach((value,key)=>console.log(value,key));

