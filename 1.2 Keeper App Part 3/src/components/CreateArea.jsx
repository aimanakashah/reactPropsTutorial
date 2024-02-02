import React, { useState } from "react";

function CreateArea(props) {
  const [inputList, setInputList] = useState({
    inputTitle: "",
    inputText: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputList((prevInput) => {
      //name are either "title or "content" from html below
      //need 'return' for ternary operator or it will be treated as an expression
      return name === "title"
        ? { inputTitle: value, inputText: prevInput.inputText }
        : { inputTitle: prevInput.inputTitle, inputText: value };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault(); //prevent the page to refresh when the button was clicked
        }}
      >
        <input
          onChange={handleChange}
          value={inputList.inputTitle}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={inputList.inputText}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.onAdd(inputList.inputTitle, inputList.inputText);
            setInputList({
              inputTitle: "",
              inputText: "",
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
