// import React, { useState } from "react";
// //useState is a function of React

// // var count = 0;

// function App() {
//   const [count, setCount] = useState(0);
//   //'useState(1000)' if console.log would looks like [1000, 'function']

//   function increase() {
//     setCount(count + 1);
//   }
//   function decrease() {
//     setCount(count - 10);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 10);
  }
  function decrease() {
    setCount(count - 13);
  }
  return (
    <div>
      <h1 className="container">{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
