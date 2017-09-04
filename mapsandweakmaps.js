//ES6:
//Create a map:
const employees = new Map();
console.log(employees);

//Output:
[object Map] { ... }
// add key values by using the .set() method.
const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);

// To remove key-value pairs use the .delete() method.
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees);

// .clear() method to remove all key-value pairs from the Map.
employees.clear();
console.log(employees);
