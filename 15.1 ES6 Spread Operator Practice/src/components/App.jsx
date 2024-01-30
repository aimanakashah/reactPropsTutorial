import React, { useState } from "react";
import Index from "./Index";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setList] = useState([]);

  function createList(lists) {
    return <Index key={lists.key} value={lists.note} />;
  }

  function addLists() {
    console.log(lists);

    setList((prevLists) => [
      ...prevLists,
      { key: lists.length + 1, note: inputValue },
    ]);
    setInputValue("");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue(value);

    // setList((prevValue) => {
    //   return [...prevValue, { note: value }];
    // });
  }

  function handleKey(event) {
    // if (event.key === "Enter") {
    //   addLists();
    // }
    return event.key === "Enter" ? addLists() : null;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onKeyDown={handleKey}
          value={inputValue}
          onChange={handleChange}
          type="text"
        />
        <button onClick={addLists}>
          <span>Add</span>
        </button>
      </div>
      {lists.map(createList)}
    </div>
  );
}

export default App;
