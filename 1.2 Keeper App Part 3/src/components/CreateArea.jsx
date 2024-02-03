import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value, //whichever name present, only the value will be affected/added
      };
    });
  }
  //this function is to pass the new note to the App.jsx to be added/store in the useState array
  //same function can be done and wrote inside the html element as inline
  function submitNote(event) {
    props.onAdd(note); //passing the current note as parameter using props
    setNote({
      title: "",
      content: "",
    }); //set to blank again to clear the inside of the input
    event.preventDefault(); //taking the event, which is clicking the button to be submit. and then set to preventDefault() so not to refresh the page
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
        {/* equivalent to the below method except the function is outline */}
        {/* <button
          onClick={() => {
            props.onAdd(note);
          }}
        >
          Add
        </button> */}
      </form>
    </div>
  );
}

export default CreateArea;
