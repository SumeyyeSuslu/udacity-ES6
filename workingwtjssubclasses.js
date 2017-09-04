//ES6:
/* In a subclass constructor function before 'this' can be
used, a call to the 'super' class must be made.
class Apple{}
class GrannySmith extends Apple{
constructor(tartnessLevel, energy){
this.tartnessLevel = tartnessLevel;
super(energy);
}
}

Output:
"error"
"SyntaxError: Invalid or unexpected token
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.0.4.min.js:1:10792"
    
//ES6:
class Toy{}
class Dragon extends Toy{}
const dragon1 = new Dragon();
dragon1 instanceof Toy; //true
