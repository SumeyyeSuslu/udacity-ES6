// ES6 - Default Function Parameters:

function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

//Babel - ES5:

'use strict';

function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Student';
  var greeting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Welcome';

  return greeting + ' ' + name + '!';
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!

//ES6:

function shippingLabel(name = 'Richard', address = 'Mountain View'){
  return `To:${name}In:${address}`;
}

// Babel - ES5:
'use strict';

function shippingLabel() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Richard';
  var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Mountain View';

  return 'To:' + name + 'In:' + address;
}
