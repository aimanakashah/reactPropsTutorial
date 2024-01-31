import React, { useState } from "react";

function List(props) {
  const [styles, setStyle] = useState(false); //cannot be called at the top level, need to be inside React function

  function handleClick() {
    // setStyle(true); //unlike below,  this method doesnt let you to reverse the action of the line-through
    setStyle((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      style={styles ? { textDecoration: "line-through" } : null}
      onClick={handleClick}
    >
      {props.note}
    </li>
  );
}
export default List;
