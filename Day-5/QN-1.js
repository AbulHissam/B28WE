// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of same size
// Remove duplicates from an array
// Rotate an array by k times

// a.Print odd numbers in an array
// Anonymous function
// let result = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) console.log(arr[i]);
//   }
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// result(arr);
// IIFE
// (function () {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) console.log(arr[i]);
//   }
// })();

// b.Convert all the strings to title caps in a string array
// Anonymous function
// let result = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i].split(" ");
//     for (let j = 0; j < temp.length; j++) {
//       temp[j] = temp[j].charAt(0).toUpperCase() + temp[j].slice(1);
//     }
//     arr[i] = temp.join(" ");
//   }
//   console.log(arr);
// };
// let arr = ["hello how are you", "i am fine", "How about you"];
// result(arr);
// IIFE
// (function () {
//   let arr = ["hello how are you", "i am fine", "how about you"];
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i].split(" ");
//     for (let j = 0; j < temp.length; j++) {
//       temp[j] = temp[j].charAt(0).toUpperCase() + temp[j].slice(1);
//     }
//     arr[i] = temp.join(" ");
//   }
//   console.log(arr);
// })();

// c.Sum of all numbers in an array
// Anonymous function //
// let result = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// result(arr);
// IIFE
// (function () {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// })();

//d.Return all the prime numbers in an array
// Anonymous function
// let result = function (arr) {
//   let primeNumber = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) primeNumber.push(arr[i]);

//     for (var j = 2; j < arr[i]; j++) {
//       if (arr[i] % j === 0) {
//         break;
//       }
//     }
//     if (j === arr[[i]]) primeNumber.push(arr[i]);
//   }
//   return primeNumber;
// };
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 13, 19, 17];
// console.log(result(arr));
// IIFE
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 13, 19, 17];
// (function (arr) {
//   let primeNumber = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) primeNumber.push(arr[i]);

//     for (var j = 2; j < arr[i]; j++) {
//       if (arr[i] % j === 0) {
//         break;
//       }
//     }
//     if (j === arr[[i]]) primeNumber.push(arr[i]);
//   }
//   console.log(primeNumber);
// })(arr);

//e.Return all the palindromes in an array
// Anonymous function
// let result = function (arr) {
//   let palindromes = [];
//   for (let i = 0; i < arr.length; i++) {
//     let reverseString = arr[i].split("").reverse().join("");
//     if (arr[i] === reverseString) palindromes.push(arr[i]);
//   }
//   return palindromes;
// };
// let arr = ["mom", "malayalam", "banana", "111", "1234"];
// console.log(result(arr));
// IIFE
// let arr = ["mom", "malayalam", "banana", "111", "1234"];
// (function (arr) {
//   let palindromes = [];
//   for (let i = 0; i < arr.length; i++) {
//     let reverseString = arr[i].split("").reverse().join("");
//     if (arr[i] === reverseString) palindromes.push(arr[i]);
//   }
//   console.log(palindromes);
// })(arr);

// f.Return median of two sorted arrays of same size

// g.Remove duplicates from an array
// Anonymous function
// let result = function (arr) {
//   // Hash array
//   let freq = new Array(10);
//   for (let i = 0; i < freq.length; i++) {
//     freq[i] = 0;
//   }
//   // Finding duplicates
//   for (let i = 0; i < arr.length; i++) {
//     freq[arr[i]]++;
//   }
//   // Printing without duplicates
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]] <= 1) newArray.push(arr[i]);
//   }
//   console.log(newArray);
// };
// let arr = [1, 2, 1, 2, 3, 4, 5, 5, 4, 6, 7, 8, 9, 6, 6];
// result(arr);
// IIFE
// (function () {
//   let arr = [1, 2, 1, 2, 3, 4, 5, 5, 4, 6, 7, 8, 9, 6, 6];
//   // Hash array
//   let freq = new Array(10);
//   for (let i = 0; i < freq.length; i++) {
//     freq[i] = 0;
//   }
//   // Finding duplicates
//   for (let i = 0; i < arr.length; i++) {
//     freq[arr[i]]++;
//   }
//   // Printing without duplicates
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]] <= 1) newArray.push(arr[i]);
//   }
//   console.log(newArray);
// })();

// h.Rotate an array by k times
// Anonymous function
// let result = function (arr, k) {
//   let splicedArray = arr.splice(k);
//   let toRotate = arr.splice(0, k);
//   for (let i = 0; i < toRotate.length; i++) {
//     splicedArray.push(toRotate[i]);
//   }
//   console.log(splicedArray);
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// result(arr, 4);
// IIFE
// (function () {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     k = 5;
//   let splicedArray = arr.splice(k);
//   let toRotate = arr.splice(0, k);
//   for (let i = 0; i < toRotate.length; i++) {
//     splicedArray.push(toRotate[i]);
//   }
//   console.log(splicedArray);
// })();
