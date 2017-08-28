//ES6 - Defaults and Destructuring Objects:
function houseDescriptor({houseColor='green', shutterColors=['red']}={}){
  return `I have a ${houseColor} house with ${shutterColors.join ('and')} shutters`;
}

houseDescriptor({houseColor:'red', shutterColors:['white', 'gray', 'pink']});
houseDescriptor();
houseDescriptor({houseColor:'green'});
houseDescriptor({shutterColors:['orange','blue']});
houseDescriptor({});

// Babel - ES5:
'use strict';

function houseDescriptor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$houseColor = _ref.houseColor,
      houseColor = _ref$houseColor === undefined ? 'green' : _ref$houseColor,
      _ref$shutterColors = _ref.shutterColors,
      shutterColors = _ref$shutterColors === undefined ? ['red'] : _ref$shutterColors;

  return 'I have a ' + houseColor + ' house with ' + shutterColors.join('and') + ' shutters';
}

houseDescriptor({ houseColor: 'red', shutterColors: ['white', 'gray', 'pink'] });
houseDescriptor();
houseDescriptor({ houseColor: 'green' });
houseDescriptor({ shutterColors: ['orange', 'blue'] });
houseDescriptor({});

// ES6
function createSundae({scoops=1, toppings=['Hot Fudge']}){
  const scoopText = scoops === 1? 'scoop':'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join('and')}toppings.`;
}
createSundae([]); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops:2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops:2, toppings:['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings:['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.
createSundae(); //"error"

// Babel - ES5:
'use strict';

function createSundae(_ref) {
  var _ref$scoops = _ref.scoops,
      scoops = _ref$scoops === undefined ? 1 : _ref$scoops,
      _ref$toppings = _ref.toppings,
      toppings = _ref$toppings === undefined ? ['Hot Fudge'] : _ref$toppings;

  var scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return 'Your sundae has ' + scoops + ' ' + scoopText + ' with ' + toppings.join('and') + 'toppings.';
}
createSundae([]); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({ scoops: 2 }); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({ scoops: 2, toppings: ['Sprinkles'] }); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({ toppings: ['Cookie Dough'] }); // Your sundae has 1 scoop with Cookie Dough toppings.
createSundae(); //"error"

// ES6 - Editing Error:
function createSundae({scoops=1, toppings=['Hot Fudge']} ={}){
  const scoopText = scoops === 1? 'scoop':'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join('and')}toppings.`;
}
createSundae([]); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops:2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops:2, toppings:['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings:['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.
createSundae(); 

// Babel - ES5:
'use strict';

function createSundae() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$scoops = _ref.scoops,
      scoops = _ref$scoops === undefined ? 1 : _ref$scoops,
      _ref$toppings = _ref.toppings,
      toppings = _ref$toppings === undefined ? ['Hot Fudge'] : _ref$toppings;

  var scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return 'Your sundae has ' + scoops + ' ' + scoopText + ' with ' + toppings.join('and') + 'toppings.';
}
createSundae([]); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({ scoops: 2 }); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({ scoops: 2, toppings: ['Sprinkles'] }); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({ toppings: ['Cookie Dough'] }); // Your sundae has 1 scoop with Cookie Dough toppings.
createSundae();
