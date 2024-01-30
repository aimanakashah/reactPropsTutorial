import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newText = event.target.value; //no need to destructure into component since we dont need to use other property
    setInputText(newText);
  }

  function addItems() {
    //a function to add the 'inputText' into the array 'items'
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText(""); //clear the input text once text was added
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* need to be in the {} since it is a javascript in html*/}
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
