import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input type="text" onChange={props.change} value={props.text} />
      <button
        //1ST METHOD, useful method to pass additional data (props.id) to the 'add' function
        // onClick={() => {
        //   props.add(props.id);
        // }}
        //2ND METHOD
        // onClick={props.add}
        //3RD METHOD
        onClick={() => {
          props.add(); //without the (), props.add is treated as reference instead of calling the function
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
