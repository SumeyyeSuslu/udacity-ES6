ES6
// It sets the 'cone' variable to 'this' and then looks up the cone variable when the function is called. This works because it is using the value of the 'this' outside the function.  

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  const cone = this; // sets 'this' to the 'cone' variable
  setTimeout(function() {
    cone.scoops++; // references the 'cone' variable
    console.log('scoop added!');
    console.log(cone.scoops);
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

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function () {
  var cone = this; // sets 'this' to the 'cone' variable
  setTimeout(function () {
    cone.scoops++; // references the 'cone' variable
    console.log('scoop added!');
    console.log(cone.scoops);
    console.log(dessert.scoops);
  }, 0.5);
};

var dessert = new IceCream();
dessert.addScoop();

Output:
"scoop added!"
1
1
