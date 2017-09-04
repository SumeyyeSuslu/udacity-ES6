// ES5 "class":
function Plane(numEngines){
  this.numEngines = numEngines;
  this.enginesActive = false;
}
//methods "inherited" by all instances
Plane.prototype.startEngines = function(){
  console.log('starting engines...');
  this.enginesActive = true;
};
const richardsPlane = new Plane(1);
richardsPlane.startEngines();
const jamesPlane = new Plane(4);
jamesPlane.startEngines();

//Output:
"starting engines..."
"starting engines..."

//ES6:
class Plane{
  constructor(numEngines){
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  startEngines(){
    console.log('starting engines...');
    this.enginesActive = true;
  }
}
typeof Plane;
//ES6:
//the eat() method ends up on Animal.prototype
//typeof Animal==='function'
class Animal{
  constructor(name= 'Sprinkles', energy = 100){
    this.name = name;
    this.energy = energy;
  }
  eat(food){
    this.energy+= food/3;
  }
}
