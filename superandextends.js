// Both ES5 and ES6 codes achieve the same functionality.
// ES6 - Subclasses with ES6:
class Tree{
  constructor(size='10', leaves = {spring:'green', summer:'green', fall:'orange', winter:null}){
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }
  changeSeason(season){
    this.leafColor = this.leaves[season];
    if ( season === 'spring'){
      this.size +=1;
    }
  }
}
class Maple extends Tree{
  constructor(syrupQty=15, size, barkColor, leaves){
    super(size, barkColor, leaves);
    this.syrupQty = syrupQty;
  }
  changeSeason(season){
    super.changeSeason(season);
    if (season === 'spring'){
      this.syrupQty+=1;
    }
  }
  gatherSyrup(){
    this.syrupQty-=3;
  }
}
const myMaple = new Maple(15,5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

//ES5:
function Tree(){
  this.size = size || 10;
  this.leaves = leaves || {spring: 'green', summer:'green', fall:'orange', winter:null};
  this.leafColor;
}
Tree.prototype.changeSeason = function(season){
  this.leafColor = this.leaves[season];
  if (season === 'spring'){
    this.size+=1;
  }
}
function Maple(syrupQty,size,barkColor,leaves){
  Tree.call(this.size, barkColor, leaves);
  this.syrupQty = syrupQty || 15;
}
Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;
Maple.ptototype.changeSeason = function(season){
  Tree.prototype.changeSeason.call(this, season);
  if (season === 'spring'){
    this.syrupQty+=1;
  }
}
Maple.prototype.gatherSyrup =  function(){
  this.syrupQty-=3;
}
const myMaple = new Maple(15,5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

//Babel - ES5:
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tree = function () {
  function Tree() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '10';
    var leaves = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { spring: 'green', summer: 'green', fall: 'orange', winter: null };

    _classCallCheck(this, Tree);

    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  _createClass(Tree, [{
    key: 'changeSeason',
    value: function changeSeason(season) {
      this.leafColor = this.leaves[season];
      if (season === 'spring') {
        this.size += 1;
      }
    }
  }]);

  return Tree;
}();

var Maple = function (_Tree) {
  _inherits(Maple, _Tree);

  function Maple() {
    var syrupQty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
    var size = arguments[1];
    var barkColor = arguments[2];
    var leaves = arguments[3];

    _classCallCheck(this, Maple);

    var _this = _possibleConstructorReturn(this, (Maple.__proto__ || Object.getPrototypeOf(Maple)).call(this, size, barkColor, leaves));

    _this.syrupQty = syrupQty;
    return _this;
  }

  _createClass(Maple, [{
    key: 'changeSeason',
    value: function changeSeason(season) {
      _get(Maple.prototype.__proto__ || Object.getPrototypeOf(Maple.prototype), 'changeSeason', this).call(this, season);
      if (season === 'spring') {
        this.syrupQty += 1;
      }
    }
  }, {
    key: 'gatherSyrup',
    value: function gatherSyrup() {
      this.syrupQty -= 3;
    }
  }]);

  return Maple;
}(Tree);

var myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
