//ES6:
/* Building classes and subclasses:
Create a Bicycle subclass that extends the Vehicle class.
The Bicycle subclass should override Bicycle's constructor
function by changing the default values for wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'.
*/

class Vehicle{
constructor (color = 'blue', wheels =4, horn ='beep beep'){
  this.color = color;
  this.wheels = wheels;
  this.horn = horn;
}
  honkHorn(){
    console.log(this.horn);
  }
}
class Bicycle extends Vehicle{
  constructor ( color, wheels = 2, horn = 'honk honk'){
    super (color,wheels, horn);
  }
}
const myVehicle = new Vehicle();
myVehicle.honkHorn();
const myBike = new Bicycle();
myBike.honkHorn();

//Output:
"beep beep"
"honk honk"

//Babel - ES5:
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Building classes and subclasses:
Create a Bicycle subclass that extends the Vehicle class.
The Bicycle subclass should override Bicycle's constructor
function by changing the default values for wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'.
*/

var Vehicle = function () {
  function Vehicle() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'blue';
    var wheels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var horn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'beep beep';

    _classCallCheck(this, Vehicle);

    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }

  _createClass(Vehicle, [{
    key: 'honkHorn',
    value: function honkHorn() {
      console.log(this.horn);
    }
  }]);

  return Vehicle;
}();

var Bicycle = function (_Vehicle) {
  _inherits(Bicycle, _Vehicle);

  function Bicycle(color) {
    var wheels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var horn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'honk honk';

    _classCallCheck(this, Bicycle);

    return _possibleConstructorReturn(this, (Bicycle.__proto__ || Object.getPrototypeOf(Bicycle)).call(this, color, wheels, horn));
  }

  return Bicycle;
}(Vehicle);

var myVehicle = new Vehicle();
myVehicle.honkHorn();
var myBike = new Bicycle();
myBike.honkHorn();
