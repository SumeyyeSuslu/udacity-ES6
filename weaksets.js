//ES6:
const student1 = {name:'James', age:26, gender:'male'};
const student2 = {name:'Julia', age:27, gender:'female'};
const student3 = {name:'Richard', age:31, gender:'male'};
const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
// If you try to add smt other than object, you'll get an error.
roster.add('Amanda');

//Output:
[object WeakSet] { ... }
"error"
"TypeError: Invalid value used in weak set
    at WeakSet.add (native)
    at bukeqinuro.js:6:8
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"

// Using weaksets:
/* Create the following variables: 
uniqueFlavors and set it to a new WeakSet object,
flavor1 and set it equal to `{flavor:'chocolate'}`
flavor2 and set it equal to an object with property 'flavor'
and value of your choice,
use the `.add()` method to add the objects `flavor1` and `flavor2` to `uniqueFlavors`,
use the `.add()` method to add the `flavor1` object to the 'uniqueFlavors' set.
*/
const uniqueFlavors = new WeakSet();
const flavor1 = {flavor:'chocolate'};
const flavor2 = {flavor:'strawberry'};
uniqueFlavors.add(flavor1,flavor2);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);

//Babel-ES5:
var uniqueFlavors = new WeakSet();
var flavor1 = { flavor: 'chocolate' };
var flavor2 = { flavor: 'strawberry' };
uniqueFlavors.add(flavor1, flavor2);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);
