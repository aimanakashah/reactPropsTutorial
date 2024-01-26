// import animals, { useAnimals } from "./data";

// const [cat, dog] = animals; //destructuring the array, first set each property to the objects

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// // const { name, sound } = cat;
// // console.log(name, sound); //it is like console.log(animals[0].sound)
// // console.log(animals[0].sound); //meow

// // const { name: animalName, sound: animalSound } = dog;
// // console.log(animalName, animalName); //assigning another name to the property so can use the variable our way

// // const { name = "Kelabu", sound = "Grr" } = cat;
// // console.log(name); //assigning the data to the array, the result will be "Kelabu" if no name was in the object

// const {
//   feedingNeeds: { food, drink },
// } = cat;

// console.log(food); //this is the way to destructure a nested property

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  //[teslaTopColour] automatically access the first object from the array coloursByPopularity: ["black", "silver"], if to access the "silver" colour, just skip the first object by adding comma like this
  //coloursByPopularity: [,teslaSecondColour]
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

console.log(honda);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
