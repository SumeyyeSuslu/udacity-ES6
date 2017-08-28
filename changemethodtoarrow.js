ES6 - Change the addScoop() method to an arrow function:

// This doesn't work. Arrow functions inherit their 'this' value from their surrounding context. Outside of the addScoop() method, the value of 'this' is the golbal object. 
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = () => { // addScoop is an arrow function
 
  setTimeout(() => { 
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
NaN
0

Babel - ES5:

'use strict';

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
  // addScoop is an arrow function

  setTimeout(function () {
    undefined.scoops++;
    console.log('scoop added!');
    console.log(undefined.scoops);
    console.log(dessert.scoops);
  }, 0.5);
};

var dessert = new IceCream();
dessert.addScoop();
