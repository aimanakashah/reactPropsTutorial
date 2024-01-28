import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function handleChange(event) {
    const { name, value } = event.target; //destructures the 'name' and 'value' properties from the 'event.target'
    name === "fName" ? setFName(value) : setLName(value); //"fName" is the name set in input elements
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          value={fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
