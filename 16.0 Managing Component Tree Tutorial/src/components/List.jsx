import React from "react";

function List(props) {
  return (
    <div>
      <ul>
        <li>{props.value}</li>
      </ul>
    </div>
  );
}
export default List;
