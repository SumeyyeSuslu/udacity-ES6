//ES6:
class Dessert{
  constructor(calories=250){
    this.calories = calories;
  }
}
class IceCream extends Dessert{
  constructor(flavor, calories, toppings=[]){
    super(calories);
    this.flavor = flavor;
    this.toppings = toppings;
  }
  addTopping(topping){
    this.topping.push(topping);
  }
}

// Babel-ES5:
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dessert = function Dessert() {
  var calories = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;

  _classCallCheck(this, Dessert);

  this.calories = calories;
};

var IceCream = function (_Dessert) {
  _inherits(IceCream, _Dessert);

  function IceCream(flavor, calories) {
    var toppings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, IceCream);

    var _this = _possibleConstructorReturn(this, (IceCream.__proto__ || Object.getPrototypeOf(IceCream)).call(this, calories));

    _this.flavor = flavor;
    _this.toppings = toppings;
    return _this;
  }

  _createClass(IceCream, [{
    key: "addTopping",
    value: function addTopping(topping) {
      this.topping.push(topping);
    }
  }]);

  return IceCream;
}(Dessert);
