import React from "react";
import Form from "./Form";
import Button from "./Button";

function Login() {
  return (
    <form className="form">
      <Form type="text" placeholder="Username" />
      <Form type="password" placeholder="Password" />
      <Button type="submit" function="Login" />
    </form>
  );
}

export default Login;
