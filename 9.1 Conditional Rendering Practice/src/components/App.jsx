import React from "react";
// import Form from "./Form";
import Register from "./Register";
import Login from "./Login";

var userIsRegistered = true;
// var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;
