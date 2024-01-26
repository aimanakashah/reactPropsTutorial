const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingNeeds: {
      food: 2,
      drink: 4,
    },
  },
  { name: "dog", sound: "woof" },
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
}

export default animals;
export { useAnimals };
