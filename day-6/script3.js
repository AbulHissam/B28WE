// Fix the code to get the largest of three.
const aa = (f, s, t) => {
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
aa(1, 2, 3);

// Fix the code to Sum of the digits present in the number
let n = 123;
console.log(add(n));
function add(n) {
  let sum = 0;
  let arr = n
    .toString()
    .split("")
    .map((ele) => Number(ele));
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Fix the code to Sum of all numbers using IIFE function
const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})();

// Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arro) {
  for (var i = 0; i <= arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
};
ano(arr);

// Fix the code to return the Prime numbers
const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});
console.log(myPrime);

// Fix the code to sum the number in that array
const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sum = num.reduce((a, b) => a + b);
console.log(sum);

// Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
(function () {
  out = arr.slice(k, arr.length);
  var count = out.length;
  var first = arr.slice(0, k);
  console.log([...out, ...first]);
})();

//Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
(function () {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
})();

// print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      console.log(arr[i]);
    }
  }
})();

// Fix the code to reverse.
(function (str) {
  str1 = str.split("").reverse().join("");
  console.log(str1);
})("abcd");

// Fix the code to remove duplicates.
var res = function (arr) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

// Fix the code to give the below output:
var array = [
  [
    ["firstname", "vasanth"],
    ["lastname", "Raje"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstname", "Sri"],
    ["lastname", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];
var final = [];

while (array.length != 0) {
  var outer_remove = array.shift();
  var new_object = {};
  while (outer_remove.length != 0) {
    var inner_remove = outer_remove.shift();
    var key = inner_remove[0];
    var value = inner_remove[1];
    new_object[key] = value;
  }
  final.push(new_object);
}
console.log(final);

// Fix the code to give the below output:
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as
  .filter((e) => e % 2 === 1)
  .reduce(function (a, c) {
    return a + c;
  });
console.log(s);
