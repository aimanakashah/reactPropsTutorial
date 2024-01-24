import React from "react";
import Form from "./Form";
import Button from "./Button";

function Register() {
  return (
    <form className="form">
      <Form type="text" placeholder="Username" />
      <Form type="password" placeholder="Password" />
      <Form type="password" placeholder="Confirm Password" />
      <Button type="submit" function="Register" />
    </form>
  );
}

export default Register;
