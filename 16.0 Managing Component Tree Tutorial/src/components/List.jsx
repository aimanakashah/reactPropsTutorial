import React from "react";

function List(props) {
  return (
    <li
      // the method of javascript will only pass the id when the note was clicked which is in a function. if said method has no function then it will auto passed the id
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/* //onChecked from App.jsx was passed as props and will only trigger when the element was clicked*/}
      {props.note}
    </li>
  );
}
export default List;
