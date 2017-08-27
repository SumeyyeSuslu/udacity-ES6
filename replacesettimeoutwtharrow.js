ES6- replace setTimeout function with an arrow function:
// Since arrow functions inherit their 'this' value from the surrounding context, this code works!
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
 
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++; 
    console.log('scoop added!');
    console.log(this.scoops);
    console.log(dessert.scoops);
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

Output:
"scoop added!"
1
1

Babel - ES5:
'use strict';

// Since arrow functions inherit their 'this' value from the surrounding context, this code works!
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
  var _this = this;

  setTimeout(function () {
    // an arrow function is passed to setTimeout
    _this.scoops++;
    console.log('scoop added!');
    console.log(_this.scoops);
    console.log(dessert.scoops);
  }, 0.5);
};

var dessert = new IceCream();
dessert.addScoop();

Output:
"scoop added!"
1
1
