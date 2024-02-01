import React, { useState } from "react";
import List from "./List";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText]; //add the note entered, (inputText) into each data of the array, 'items' (prevItems)
    });
    setInputText("");
    console.log(items);
  }

  function deleteItem(id) {
    console.log(id); //passing the id that was clicked, if second note was, then the id=2.
    //prevItems is carrying the current data array
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        //it will filter every object(item) and match the index with the id=2.
        return index !== id; //filter out the one doesnt match with the id meaning we are deleting the id
      });
    });
    return setItems;
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
        <ul>
          {items.map((item, index) => (
            <List key={index} id={index} onChecked={deleteItem} note={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
