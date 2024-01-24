import React from "react";
import Login from "./Login";

let isLoggedIn = false;
const time = new Date().getHours();
console.log(time);

function renderedConditionally() {
  return isLoggedIn ? <h1>Hello</h1> : <Login />;
  // if (isLoggedIn) {
  //   return <h1>Hello</h1>;
  // } else {
  //   return <Login />;
  // }
}

function App() {
  return <div className="container">{renderedConditionally()}</div>;
  // when calling a function within, need to put parentheses

  //   return (
  //     <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  //   );
}

export default App;
