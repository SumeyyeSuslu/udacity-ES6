//ES6:
const circle ={
  radius:10,
  color:'Orange',
  getArea:function(){
      return Math.PI * this.radius * this.radius;
  },
  getCircumference:function(){
  return 2*Math.PI*this.radius;
}
  };
let{radius,getArea,getCircumference} = circle;
getArea();

//Output:



//Babel-ES5:
'use strict';

var circle = {
  radius: 10,
  color: 'Orange',
  getArea: function getArea() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function getCircumference() {
    return 2 * Math.PI * this.radius;
  }
};
var radius = circle.radius,
    getArea = circle.getArea,
    getCircumference = circle.getCircumference;

getArea();

//Output:
/*
Cannot read property 'radius' of undefined
*/
