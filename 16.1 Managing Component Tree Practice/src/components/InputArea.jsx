import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText(""); //in this onClick function, when the 'button' was clicked, it triggered the 'addItem' or 'onAdd', then the 'setInputText("")'
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
