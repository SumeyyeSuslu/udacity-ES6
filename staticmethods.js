//ES6:
/* To add a static method, the keyword static is placed in front of the method name.*/
// badWeather() a method that is accessed directly on the Plane class.
class Plane{
  constructor(numEngines){
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  static badWeather(planes){
    for(plane of planes){
      plane.enginesActive = false;
    }
  }
  startEngines(){
    console.log('starting engines...');
    this.enginesActive = true;
  }
}
Plane.badWeather([plane1,plane2,plane3]);

// Babel - ES5:
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* To add a static method, the keyword static is placed in front of the method name.*/
// badWeather() a method that is accessed directly on the Plane class.
var Plane = function () {
  function Plane(numEngines) {
    _classCallCheck(this, Plane);

    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  _createClass(Plane, [{
    key: 'startEngines',
    value: function startEngines() {
      console.log('starting engines...');
      this.enginesActive = true;
    }
  }], [{
    key: 'badWeather',
    value: function badWeather(planes) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = planes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          plane = _step.value;

          plane.enginesActive = false;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Plane;
}();

Plane.badWeather([plane1, plane2, plane3]);
