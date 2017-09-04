// ES6:
/* 
Turn the 'james' object into an iterable object.
Each call to iterator.next should log out an object with
the following info:
key: the key from the 'james' object
value: the value of the key from the 'james' object
done: true or false if there are more keys/values 
*/
const james={
  name:'James',
  height:`5'10"`,
  weight:185,
  [Symbol.iterator]:function(){
    let keys = Object.keys(this);
    let values = Object.keys(this).map((k)=>this[k]);
    let index = 0;
    return{
      next:function(){
        return{
          value: values[index],
          key: keys[index],
          done: index++>=keys.length - 1
        };
      }
    }
  }
};
let iterator = james[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//Output:
"James"
"5'10\""
185

//Babel-ES5:
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* 
Turn the 'james' object into an iterable object.
Each call to iterator.next should log out an object with
the following info:
key: the key from the 'james' object
value: the value of the key from the 'james' object
done: true or false if there are more keys/values 
*/
var james = _defineProperty({
  name: 'James',
  height: '5\'10"',
  weight: 185
}, Symbol.iterator, function () {
  var _this = this;

  var keys = Object.keys(this);
  var values = Object.keys(this).map(function (k) {
    return _this[k];
  });
  var index = 0;
  return {
    next: function next() {
      return {
        value: values[index],
        key: keys[index],
        done: index++ >= keys.length - 1
      };
    }
  };
});
var iterator = james[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
