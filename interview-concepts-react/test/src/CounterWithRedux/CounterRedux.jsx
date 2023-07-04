import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "./Redux/Actions";

const CounterRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer);

  return (
    <>
      <h1>this is counter from redux</h1>

      <button onClick={() => dispatch(Increment())}>Increase</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(Decrement())}>Decrease</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </>
  );
};
export default CounterRedux;
