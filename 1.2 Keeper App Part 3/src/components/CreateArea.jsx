import React, { useState } from "react";

function CreateArea(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    name === "title" ? setInputTitle(value) : setInputText(value);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          value={inputTitle}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={inputText}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            props.onAdd(inputTitle, inputText);
            setInputTitle("");
            setInputText("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
