// var num = -5;
// function addFive(num) {
//   return num + 5;
// }
// var result = addFive(num);
// console.log(result);

// var num = 0;
// function getOpposite(num) {
//   if (num === 0) {
//     console.log(num);
//   } else if (Number.isInteger(num)) {
//     console.log(-num);
//   } else if (typeof num === "string" || !Number.isInteger(num)) {
//     console.log(-1);
//   }
// }
// var result = getOpposite(num);

// var min = 5;
// function toSeconds(min) {
//   console.log(min * 60);
// }
// var secs = toSeconds(min);

// var mystr = "5";
// function toInteger(mystr) {
//   return parseInt(mystr);
// }
// var myint = toInteger(mystr);
// console.log(myint);

// var myint = 0;
// function nextNumber(myint) {
//   return myint + 1;
// }
// var myNextint = nextNumber(myint);
// console.log(myNextint);

// var arr = [1, 2, 3];
// function getFirstElement(arr) {
//   return arr[0];
// }
// var data = getFirstElement(arr);
// console.log(data);

// var arr = [1, 2, 24];
// function hourToSeconds(arr) {
//   let hours = [];
//   for (let i = 0; i < arr.length; i++) {
//     hours.push(arr[i] * 60 * 60);
//   }
//   return hours;
// }
// var data = hourToSeconds(arr);
// console.log(data);

// function findPerimeter(num1, num2) {
//   return 2 * (num1 + num2);
// }
// var peri = findPerimeter(6, 7);
// console.log(peri);

// function lessThan100(num1, num2) {
//   return num1 + num2 <= 100 ? true : false;
// }
// var res = lessThan100(22, 15);
// console.log(res);

// function remainder(num1, num2) {
//   return num1 % num2;
// }
// var res = remainder(-9, 45);
// console.log(res);

// function CountAnimals(tur, horse, pigs) {
//   return 2 * tur + 4 * horse + 4 * pigs;
// }
// var legs = CountAnimals(2, 3, 5);
// console.log(legs);

// function frames(num1, num2) {
//   return num1 * (num2 * 60);
// }
// var fps = frames(10, 25);
// console.log(fps);

// function divisibleByFive(num1) {
//   return num1 % 5 === 0 ? true : false;
// }
// var divisible = divisibleByFive(-55);
// console.log(divisible);

// function isEven(num) {
//   return n % 2 === 0 ? true : false;
// }
// var even = isEven(5);
// console.log(even);

// function areBothOdd(n1, n2) {
//   return n1 % 2 === 1 && n2 % 2 === 1 ? true : false;
// }
// console.log(areBothOdd(1, 4));

// function getFullName(s1, s2) {
//   if (s1 === undefined) s1 = "";
//   if (s2 === undefined) s2 = "";
//   return s1 + " " + s2;
// }
// console.log(getFullName("guvi", "geek"));

// function getLengtOfWord(word) {
//   return word === undefined ? -1 : word.length;
// }
// console.log(getLengtOfWord("asdfghj"));

// function getDistance(x1, y1, x2, y2) {
//   let temp = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
//   return Math.sqrt(temp);
// }
// console.log(getDistance(100, 100, 400, 300));
