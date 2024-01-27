import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [color, setColor] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setColor(true);
  }

  function handleMouseOut() {
    console.log("Moused Out");
    setColor(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: color ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
