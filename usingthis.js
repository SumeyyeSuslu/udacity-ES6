// The value of this inside the Sundae constructor function is a new object because it was called with new.

const mySundae = new Sundae('chocolate',['Sprinkles', 'Hot Fudge']);


// The value of this inside printName() will refer to obj2 since the first parameter of call() is to explicitly set what this refers to. 
const result =  obj1.printName.call(obj2);

// The value of this inside teleport() will refer to data.
data.teleport();

// The value of this inside teleport() is either the global object or if in strict mode, it's undefined.
teleport();

// The value of this inside the train constructor function: a new object.
const redTrain = new Train('red');

// The value of this inside the increaseSpeed() function: redTrain object
const redTrain =  new Train('red');
redTrain.increaseSpeed(25); 
