import "./App.css";
import { useState } from "react";
import Demo from "./Demo";

export const findLengthOfString = (string) => {
  return string.length;
};

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hi hello</h1>
      <Demo count={count} setCount={setCount} />
    </>
  );
};

//   const [btnColor, setBtnColor] = useState("green");
//   const [disabled, setDisabled] = useState(false);
//   const btnText = btnColor === "green" ? "yellow" : "green";
//   const setColor = () => {
//     if (btnColor === "yellow") setBtnColor("green");
//     else setBtnColor("yellow");
//   };
//   const handleCheckboxChange = (event) => {
//     //const col = event.target.checked ? setBtnColor('gray') : ""
//     setDisabled(event.target.checked);
//     const col = event.target.checked
//       ? setBtnColor("gray")
//       : setBtnColor("green");
//   };
//   return (
//     <div>
//       <button
//         style={{ backgroundColor: btnColor }}
//         onClick={setColor}
//         disabled={disabled}
//       >
//         Change to {btnText}
//       </button>
//       <input
//         type="checkbox"
//         id="ck-for-btn"
//         // disabled={disabled}
//         onChange={handleCheckboxChange}
//       />
//       <label htmlFor="ck-for-btn">Check</label>
//     </div>
//   );
// }

export default App;
