import React from "react";

function Keys() {
  const state = {
    loading: "true",
    name: "",
    job: "",
  };

  function updateState(key, value) {
    state[key] = value;
  }

  updateState("name", "vidhya");
  updateState("products", []);
  console.log(state);
  return <div>Keys</div>;
}

export default Keys;
