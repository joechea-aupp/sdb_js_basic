// data type
// 1. Number
168;
3.14;

// 2. String
("Hello World");

// 3. Boolean
true;
false;

// 4. Undefined
var a;
console.log(a); // undefined

// 5. Null
var b = null;
console.log(b); // null

// 6. Object
var c = {};
var d = {
  name: "John",
  age: 25,
};
console.log(d.name); // John

// 7. Array
var e = [];
var f = [1, 2, 3];
console.log(f[0]); // 1
var g = [1, "Hello", true, null, undefined, {}];
// multi-dimensional array
var h = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// 8. Function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// 9. BigInt
var i = 1234567890123456789012345678901234567890n;
console.log(i);
