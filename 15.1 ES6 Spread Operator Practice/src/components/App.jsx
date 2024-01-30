import React, { useState } from "react";
import Index from "./Index";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lists, setList] = useState([]);

  function createList(lists) {
    return <Index key={lists.key} value={lists.note} />;
  }

  function addLists() {
    setList((prevLists) => [
      ...prevLists,
      { key: lists.length + 1, note: inputValue },
    ]); //inputValue was passed from the handlChange() when the event.target.value was inserted into setInputValue()
    setInputValue(""); //act as an operator to pass the note inserted (inputValue) before storing the note into array 'lists'
    console.log(lists);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue(value); //setInputValue(inputValue)

    // setList((prevValue) => {
    //   return [...prevValue, { note: value }];
    // });
  }

  function handleKey(event) {
    // if (event.key === "Enter") {
    //   addLists();
    // }
    return event.key === "Enter" ? addLists() : null; //extra feature added so that the note was added when the user press 'Enter'.
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
          //value was set so that we can clear the input placeholder after the note was added
          onChange={handleChange}
          type="text"
        />
        <button onClick={addLists}>
          <span>Add</span>
        </button>
      </div>
      {/* using mapping components technique to display note added like a forEach and for loop */}
      {lists.map(createList)}
    </div>
  );
}

export default App;
