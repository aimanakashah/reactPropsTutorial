import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target; //destructures the 'name' and 'value' properties from the 'event.target'

    // setFullName((prevValue) => {
    //   if (name === "fName") {
    //     return { fName: value, lName: prevValue.lName };
    //   } else if (name === "lName") {
    //     return { fName: prevValue.fName, lName: value }; //"lName" is the name set in input element
    //   }
    // });

    setFullName((prevValue) =>
      name === "fName"
        ? { ...prevValue, fName: value }
        : { ...prevValue, lName: value }
    );

    //METHOD BELOW GIVES OUT ERROR EXPECTING AN ASSIGNMENT OR FUNCTION CALL BUT INSTEAD SAW AN EXPRESSION
    // setFullName((prevValue) => {
    //   name === "fName"
    //     ? { lName: prevValue, fName: value }
    //     : { fName: prevValue, lName: value };
    // });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          value={fullName.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={fullName.lName}
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
