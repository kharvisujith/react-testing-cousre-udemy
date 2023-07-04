import { useMemo } from "react";
import { useCallback, useState } from "react";
import Todos from "./Todos";

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  //   const performCalc = (a) => {
  //     return a * a;
  //   };

  //const calculate = useMemo(performCalc(5), [count]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default Callbackhook;
