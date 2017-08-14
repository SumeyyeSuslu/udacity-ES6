function getClothing(isCold){
  if(isCold){
    let freezing = 'Grab a jacket!';
  }
  else {
    let hot = 'It\'s a shorts kind of day';
    console.log(freezing);
  }
}
getClothing(false);

//Output:

/*Console Run  Clear
"error"
"ReferenceError: freezing is not defined
    at getClothing (cazekefuyo.js:7:42)
    at cazekefuyo.js:10:1
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"*/
    
// Babel- ES5    
    'use strict';

function getClothing(isCold) {
  if (isCold) {
    var _freezing = 'Grab a jacket!';
  } else {
    var hot = 'It\'s a shorts kind of day';
    console.log(freezing);
  }
}
getClothing(false);

//Output:
/*"error"
"ReferenceError: freezing is not defined
    at getClothing (cazekefuyo.js:8:42)
    at cazekefuyo.js:11:1
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"*/


function getClothing(isCold){
  if(isCold){
    var freezing = 'Grab a jacket!';
  }
  else {
    var hot = 'It\'s a shorts kind of day';
    console.log(freezing);
  }
}
getClothing(false);

// Output:
// undefined

