import React, { useState } from "react";
import List from "./List";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function createList(items) {
    return <List key={items.key} value={items.note} />;
    // key and value above was taken and used from when updating the items array using spread operator(...prevValue)
    //{items.key} and {items.note} were passed to the List.jsx and utilise using props
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, { key: items.length + 1, note: inputText }];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {/* <ul> */}
        {items.map(createList)}
        {/* {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))} */}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default App;
