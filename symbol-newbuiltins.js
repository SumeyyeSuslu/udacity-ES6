//ES6:
const sym1 = Symbol('apple');
console.log(sym1);
const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);

//Output:
[object Symbol] { ... }
false

// ES6- Instead of adding another banana to the bowl, new banana added. To fix this problem, use symbol.
const bowl = {
  'apple':{color:'red', weight:136.078},
  'banana':{color:'yellow', weight:183.15},
  'orange':{color:'orange', weight:170.097},
  'banana':{color:'yellow', weight:176.843}
};
console.log(bowl);

//Output:

Console Run  Clear
[object Object] {
  apple: [object Object] {
    color: "red",
    weight: 136.078
  },
  banana: [object Object] {
    color: "yellow",
    weight: 176.843
  },
  orange: [object Object] {
    color: "orange",
    weight: 170.097
  }
}
//ES6 - Right way:
const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);

//Output:
[object Object] { ... }

