import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState(false);
  const [click, setClick] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
    setClick(false);
    console.log("Changed");
  }

  function handleMouseOver() {
    setColor(true);
  }

  function handleMouseOut() {
    setColor(false);
  }

  function handleClick(event) {
    setClick(true);
    event.preventDefault(); //catching the event that triggered this function and prevent the default of the form element to refresh the page
  }
  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {click && name}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name} //setting the value of the input to the value inserted
        />
        <button
          style={{ backgroundColor: color ? "black" : "wheat" }} //if the color is true then "wheat will be triggered"
          onMouseOver={handleMouseOver} //true
          onMouseOut={handleMouseOut} //false
          type="submit"
          // onClick={handleClick} //when the button was clicked/submitted, the function to triggered was pass to the form element as onSubmit attr
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [headingText, setHeading] = useState("");

//   function handleChange(event) {
//     console.log(event.target.value);
//     setName(event.target.value);
//   }

//   function handleClick(event) {
//     setHeading(name);

//     event.preventDefault();
//   }

//   return (
//     <div className="container">
//       <h1>Hello {headingText}</h1>
//       <form onSubmit={handleClick}>
//         <input
//           onChange={handleChange}
//           type="text"
//           placeholder="What's your name?"
//           value={name}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
