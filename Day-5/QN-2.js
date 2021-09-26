var num = -5;
function addFive(num) {
  return num + 5;
}
var result = addFive(num);
console.log(result);

var num = 0;
function getOpposite(num) {
  if (num === 0) {
    console.log(num);
  } else if (Number.isInteger(num)) {
    console.log(-num);
  } else if (typeof num === "string" || !Number.isInteger(num)) {
    console.log(-1);
  }
}
var result = getOpposite(num);

var min = 5;
function toSeconds(min) {
  console.log(min * 60);
}
var secs = toSeconds(min);

var mystr = "5";
function toInteger(mystr) {
  return parseInt(mystr);
}
var myint = toInteger(mystr);
console.log(myint);

var myint = 0;
function nextNumber(myint) {
  return myint + 1;
}
var myNextint = nextNumber(myint);
console.log(myNextint);

var arr = [1, 2, 3];
function getFirstElement(arr) {
  return arr[0];
}
var data = getFirstElement(arr);
console.log(data);

var arr = [1, 2, 24];
function hourToSeconds(arr) {
  let hours = [];
  for (let i = 0; i < arr.length; i++) {
    hours.push(arr[i] * 60 * 60);
  }
  return hours;
}
var data = hourToSeconds(arr);
console.log(data);

function findPerimeter(num1, num2) {
  return 2 * (num1 + num2);
}
var peri = findPerimeter(6, 7);
console.log(peri);

function lessThan100(num1, num2) {
  return num1 + num2 <= 100 ? true : false;
}
var res = lessThan100(22, 15);
console.log(res);

function remainder(num1, num2) {
  return num1 % num2;
}
var res = remainder(-9, 45);
console.log(res);

function CountAnimals(tur, horse, pigs) {
  return 2 * tur + 4 * horse + 4 * pigs;
}
var legs = CountAnimals(2, 3, 5);
console.log(legs);

function frames(num1, num2) {
  return num1 * (num2 * 60);
}
var fps = frames(10, 25);
console.log(fps);

function divisibleByFive(num1) {
  return num1 % 5 === 0 ? true : false;
}
var divisible = divisibleByFive(-55);
console.log(divisible);

function isEven(num) {
  return n % 2 === 0 ? true : false;
}
var even = isEven(5);
console.log(even);

function areBothOdd(n1, n2) {
  return n1 % 2 === 1 && n2 % 2 === 1 ? true : false;
}
console.log(areBothOdd(1, 4));

function getFullName(s1, s2) {
  if (s1 === undefined) s1 = "";
  if (s2 === undefined) s2 = "";
  return s1 + " " + s2;
}
console.log(getFullName("guvi", "geek"));

function getLengtOfWord(word) {
  return word === undefined ? -1 : word.length;
}
console.log(getLengtOfWord("asdfghj"));

function getDistance(x1, y1, x2, y2) {
  let temp = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
  return Math.sqrt(temp);
}
console.log(getDistance(100, 100, 400, 300));

function getNthElement(arr, n) {
  return arr[n - 1];
}
console.log(getNthElement([5, 4, 6, 7, 9], 2));

function getNthElement(arr, n) {
  if (n < 0 || n > arr.length) return -1;
  return arr[n - 1];
}
console.log(getNthElement([5, 4, 6, 7, 9], 1));

function getLastElement(arr) {
  return arr[arr.length - 1];
}
console.log(getLastElement([5, 4, 6, 7, 9]));

var obj = {
  mykey: "dfgh",
};
function getProperty(obj, key) {
  if (obj[key] === undefined) return "NA";
  return obj[key];
}
console.log(getProperty(obj, "dummykey"));

var obj = {};
function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}
console.log(addProperty(obj, "mykey"));

var obj = {};
function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeProperty(obj, "mykey"));

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(ar) {
  let positives = [];
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] >= 0) positives.push(ar[i]);
  }
  return positives;
}
console.log(getPositives(ar));

function powersOfTwo(n) {
  let output = [];
  for (let i = 0; i <= n; i++) {
    output.push(Math.pow(2, i));
  }
  return output;
}
console.log(powersOfTwo(2));

function findMax(arr) {
  return arr.sort()[arr.length - 1];
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(findMax(ar));

function printPrimes(n) {
  let i = 1;
  while (i <= n) {
    if (isPrime(i)) console.log(i);
    i++;
  }
}
function isPrime(i) {
  if (i === 1) return true;
  for (var j = 2; j <= i; j++) {
    if (i % j === 0) break;
  }
  if (j === i) return true;
  return false;
}
printPrimes(100);

function getPrimes(n, start) {
  let i = start;
  while (i <= start + n) {
    if (isPrime(i)) console.log(i);
    i++;
  }
}
function isPrime(i) {
  if (i === 1) return true;
  for (var j = 2; j <= i; j++) {
    if (i % j === 0) break;
  }
  if (j === i) return true;
  return false;
}
getPrimes(10, 100);

function reverseString(s) {
  return s.split("").reverse().join("");
}
var s = reverseString("JavaScript");
console.log(s);

function mergeArrays(ar1, ar2) {
  var result = [];
  result = ar1.concat(ar2);
  return result;
}
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);

function sumCSV(s) {
  let arr = s.split(",").map(Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumCSV(`1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9`));
