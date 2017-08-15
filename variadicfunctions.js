// Functions that take an indefinite number of arguments. However, it can have issues.
//ES6:
//This has issues:
function sum(){
  let total = 0;
  for (const argument of arguments){
    total + = argument;
  }
  return total;
} 

// Using the rest parameter
function sum(...nums){
  let total = 0;
  for ( const num of nums){
    total += num;
  }
  return total;
}
