import { useEffect } from "react";
import { memo } from "react";

const Child = (props) => {
  console.log("child called");
  //   useEffect(() => {
  //     console.log("child called");
  //   }, []);
  return (
    <>
      <h1>childdd</h1>
      <p>{`Val in child is ${props.val}`}</p>
      <button onClick={props.keeek}>callbaccck</button>
      <button onClick={() => props.setVal(props.val + 1)}>setVallll</button>
    </>
  );
};

export default memo(Child);
