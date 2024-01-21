// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new 'array' by doing something with each item in an array.
// const newNumbers = numbers.map((num) => {
//   return num * 2;
// });
// console.log(newNumbers);

// //Filter - Create a new 'array' by keeping the items that return true.
// const filterNumber = numbers.filter((num) => {
//   return num > 10;
// });
// console.log(filterNumber);

// //Reduce - Accumulate a value by doing something to each item in an array.
// console.log(numbers);
// var newNum = numbers.reduce((accumulator, currentNumber) => {
//   console.log("accumulator = ", accumulator);
//   console.log("current number = ", currentNumber);

//   return accumulator + currentNumber;
// });
// // var newNum = 0;
// // numbers.forEach((currentNumber) => {
// //   newNum += currentNumber;
// // });

// console.log(newNum); //114

// //Find - find the first item that matches from an array.

// const findNumber = numbers.find((num) => {
//   // return num > 10;
//   return num < 50 && num > 10;
// });
// console.log(findNumber);

// //FindIndex - find the index of the first item that matches.
// //index of the number is the position in the array. [0, 1, 2, 3, 4, 5]
// const findIndexNumber = numbers.findIndex((num) => {
//   return num < 50 && num > 10;
// });
// console.log(findIndexNumber);

// import React from "react";
import emojipedia from "./emojipedia";

const newArray = emojipedia.map((emoji) => {
  return emoji.meaning.substring(0, 99);
});
console.log(newArray);
// console.log(emojipedia[0].meaning.substring(0, 99));
