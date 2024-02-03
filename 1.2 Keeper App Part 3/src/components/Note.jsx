import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id); //same function can be done inline of the element as an arrow function
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
      {/* <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        DELETE
      </button> */}
    </div>
  );
}

export default Note;
