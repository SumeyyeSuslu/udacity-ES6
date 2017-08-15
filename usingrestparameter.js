/* Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.
average(2,6) should return 4
average(2,3,3,5,7,10) should return 5
average(7,1432,12,13,100) should return 312.8
average() should return 0
*/
function average(...nums) {
    let total =0;
    for (const num of nums){
        total = total + num;
        
    } if (nums.length === 0){
        return 0;
    } else
    return total / nums.length;

}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

//Output:
/*
4
5
312.8
0
*/

//Babel-ES5:
"use strict";

function average() {
    var total = 0;

    for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
        nums[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var num = _step.value;

            total = total + num;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (nums.length === 0) {
        return 0;
    } else return total / nums.length;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

//Output:



2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
function average() {
    var total = 0;
    for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
        nums[_key] = arguments[_key];
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var num = _step.value;
            total = total + num;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (nums.length === 0) {
        return 0;
    } else return total / nums.length;
}
console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
4
5
312.8
0
