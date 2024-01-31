import React from "react";

function crossNote(event) {
  event.target.style.textDecoration = "line-through";
  console.log(event);
  //if I try method below, it will access multiple elements since every note is in the same class. thus cannot access the style of single element, (the note we want to line-through)
  // document.getElementsByClassName("cross").style.textDecoration =
  //   "line-through";
}

function List(props) {
  return (
    <li className="cross" onClick={crossNote}>
      {props.note}
    </li>
  );
}
export default List;
