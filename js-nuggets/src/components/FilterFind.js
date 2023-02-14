//filter- returns new array, can manipulate the size of the of the array, returns based on condition
//find - returns single instance, returns first match, if no match -undefined

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
    name: "Ann",
    age: "60",
    position: "designer",
  },
  {
    name: "Susan",
    age: "40",
    position: "architect",
  },
  { name: "Mary", age: "20", position: "boss" },
];

function FilterFind() {
  const youngpeople = people.filter(
    (person) => person.age < 40 && person.position === "boss"
  );
  console.log(youngpeople); // returns array
  //accessign value
  console.log(youngpeople[0].name);

  const findDesigner = people.find((person) => person.position === "designer");
  console.log(findDesigner); // returns object
  //accessing value
  console.log(findDesigner.name);
  return <div>FilterFind</div>;
}

export default FilterFind;
