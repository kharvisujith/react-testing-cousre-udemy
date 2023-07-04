import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementbyamount,
  decrementbyamount,
  weather,
} from "./counterSlice";
import { login, logout } from "./loginSlice";
import { weatherapi } from "./counterSlice";

const CounterWithReduxtk = () => {
  const dispatch = useDispatch();
  const { countvalue } = useSelector((state) => state.counter);
  const val = useSelector((state) => state.login);
  console.log("value of loginState is", val);

  return (
    <>
      <h1>from tk</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decreae</button>
      <button onClick={() => dispatch(incrementbyamount(10))}>
        Increseby10
      </button>
      <button onClick={() => dispatch(decrementbyamount(10))}>
        Decreaseby10
      </button>
      <p>{countvalue}</p>
      <br />
      <h1>for login </h1>
      <button onClick={() => dispatch(login())}>login</button>
      <p>{`login status is ${val}`}</p>
      <button onClick={() => dispatch(logout())}>logout</button>

      <button onClick={() => dispatch(weather("Bangalore"))}>getWeather</button>
      <button onClick={async () => await dispatch(weatherapi("Bangalore"))}>
        getweatherthunk
      </button>
    </>
  );
};
export default CounterWithReduxtk;
