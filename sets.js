//ES6:
// Create an empty set
const games = new Set();
console.log(games);

//Output:
[object Set] { ... }

// Create a set from the list of values
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart','Super Mario Bros.']);
console.log(games);
// Automatically removes the duplicate entry when the Set is created.

// Add and delete items from the set:
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart','Super Mario Bros.']);
games.add('Banjo-Tamoie');
games.add('Benjamin Franklin');
games.delete('Super Mario Bros.');
console.log(games);
//.clear() method could use to delete all the items in the set.
games.clear();

// Checking the length:
const months = new Set(['January','February','March','April','May','June','July','August','September','October','November','December']);
console.log(months.size);

//Output:
12
// Checking if an item exists:
console.log(months.has('September'));
//Output:
true

//Retrieving all values:
console.log(months.values());

// Using the set iterator:
const iterator = months.values();
iterator.next();

