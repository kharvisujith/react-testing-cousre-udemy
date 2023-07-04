import { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("parnt renderd");
  const [val, setVal] = useState(0);
  const [count, setCount] = useState(0);

  const handleVal = useCallback(() => {
    console.log("Inside handleval");
    setVal((prev) => prev + 1);
  }, []);

  const expensiveCalculation = (count) => {
    console.log("expensive calulation");
    return count + 1;
  };

  const calculationValue = useMemo(() => expensiveCalculation(count), [count]);

  //   const keeek = useCallback(() => {
  //     console.log("keeeeeek");
  //     console.log("value of valin keek is", val);
  //   }, [val]);
  const keeek = () => {
    console.log("keeek");
    // console.log("value of keek is", val);
    setCount(count + 1);
  };

  //   useEffect(() => {
  //     console.log("Parent called");
  //     keeek();
  //   }, [keeek]);

  return (
    <>
      <h1>Parent</h1>

      <p>{`Val in Parent is ${val}`}</p>
      <button onClick={handleVal}>Click me</button>
      <button onClick={keeek}>keeek</button>
      <p>{calculationValue}</p>

      <Child val={val} setVal={handleVal} />
    </>
  );
};
export default Parent;
