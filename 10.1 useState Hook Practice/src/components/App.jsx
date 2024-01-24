//FIRST SOLUTION
// import React from "react";
// import { useState } from "react";

// // let masa = new Date().toLocaleTimeString();
// // console.log(time);

// function App() {
//   const [time, currentTime] = useState("TIME");

//   function refresh() {
//     let time = new Date().toLocaleTimeString(); //need to declare inside the function if to use the useState method
//     currentTime(time);
//   }
//   function startTime() {
//     setInterval(refresh, 1000);
//   }
//   return (
//     <div className="container">
//       <h1>{time}</h1>
//       {/* <button onClick={refresh}>Get Time</button> part 1 */}
//       <button onClick={startTime}>Get Time</button>
//     </div>
//   );
// }

// export default App;

//SECOND SOLUTION
import React from "react";
import { useState } from "react";

function App() {
  setInterval(refresh, 1000);
  const [now, refreshTime] = useState("TIME");

  function refresh() {
    let time = new Date().toLocaleTimeString();
    refreshTime(time);
  }

  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={refresh}>Get Time</button>
    </div>
  );
}

export default App;
