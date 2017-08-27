ES6 - This and arrow functions:

// The value of this inside the function is the global object not the dessert object.New scoops variable created wth a default value of undefined, then incremented, result is NaN.  

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(function() {
    this.scoops++;
    console.log('scoop added!');
    console.log(scoops);
    console.log(dessert.scoops);
  }, 500);
};

const dessert = new IceCream();
dessert.addScoop();

Output:
"scoop added!"
NaN
0

Babel - ES5:

'use strict';

// The value of this inside the function is the global object not the dessert object.New scoops variable created wth a default value of undefined, then incremented, result is NaN.  

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
  setTimeout(function () {
    this.scoops++;
    console.log('scoop added!');
    console.log(scoops);
    console.log(dessert.scoops);
  }, 500);
};

var dessert = new IceCream();
dessert.addScoop();
