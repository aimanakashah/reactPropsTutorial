import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newMapNumbers = numbers.map((x) => x * 2);
console.log(newMapNumbers);

////Filter - Create a new array by keeping the items that return true.
const newFilterNumbers = numbers.filter((num) => num < 10);
console.log(newFilterNumbers);

// Reduce - Accumulate a value by doing something to each item in an array.
var newReduceNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newReduceNumber);

//Find - find the first item that matches from an array.
const newFindNumber = numbers.find((num) => num > 10);
console.log(newFindNumber);

//FindIndex - find the index of the first item that matches.
const newFindIndexNumber = numbers.findIndex((num) => num > 10);
console.log(newFindIndexNumber);
