import { useState } from "react";
import Hoc from "./Hoc";

const CompOne = ({ sal, handleclick }) => {
  //   const [sal, setSal] = useState(10);
  //   const handleclick = () => {
  //     setSal((prev) => prev + 10);
  //   };
  return (
    <>
      <button onClick={handleclick}>click me</button>
      <p>{sal}</p>
    </>
  );
};
export default Hoc(CompOne);
