import React from "react";

function Form(props) {
  return (
    <input type={props.text} placeholder={props.placeholder} />

    // <form className="form">
    //   <input type="text" placeholder="Username" />
    //   <input type="password" placeholder="Password" />
    //   <input type="password" placeholder="Confirm Password" />
    //   <button type="submit">Register</button>
    // </form>
  );
}

export default Form;
