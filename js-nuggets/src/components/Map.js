//javascript map method
// returns a new array
//does not change the size of the original array (unlike filter)
//uses values from the original array when making the new one

//getting unique values using new set

import React from "react";
const people = [
  {
    name: "Vidhya",
    age: "30",
    position: "designer",
  },
  {
    name: "Vinod",
    age: "20",
    position: "architect",
  },
  { name: "Gautham", age: "10", position: "boss" },
  {
    name: "Vidhya",
    age: "30",
    position: "designer",
  },
  {
    name: "Vinod",
    age: "20",
    position: "architect",
  },
  { name: "Gautham", age: "10", position: "boss" },
];

function Map() {
  const ages = people.map((person) => person.age * 2);
  const name = people.map((person) => `<h2>${person.name}</h2>`);

  const positions = [
    "all",
    ...new Set(people.map((person) => person.position)),
  ];
  console.log(positions);
  return (
    <div>
      {positions.map((position) => (
        <button>{position}</button>
      ))}
    </div>
  );
}

export default Map;
