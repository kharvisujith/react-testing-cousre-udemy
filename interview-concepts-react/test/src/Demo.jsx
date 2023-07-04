import { useCallback } from "react";
import { useState } from "react";
import CallabackComponent from "./CallabackComponent";

const Demo = (props) => {
  const [todo, setTodo] = useState([]);

  const addTodo = useCallback(() => {
    setTodo((prev) => [...prev, "new entry"]);
  }, [todo]);

  const handleDecrement = () => {
    if (props.count > 0) {
      props.setCount(props.count - 1);
    }
  };
  console.log(props);
  return (
    <>
      {/* this compoent is to demo useCallback */}
      <CallabackComponent todo={todo} addTodo={addTodo} />

      <button
        onClick={() => props.setCount(props.count + 1)}
        style={{ backgroundColor: "green" }}
      >
        Increment
      </button>
      <h5>{props.count}</h5>
      <button style={{ backgroundColor: "red" }} onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
};

export default Demo;

// them -changin eventss - synthetic events
// life cycle of class component or component
// events in depth -> done
//class components
//hooks - useCallback, useMemo -> done
//jest - enzyme - snapshot testing -> done
// callback in javascript - > promises instead of callback -> callback hell -.promises callback -> done
// array and things - > done
// useEffect -> done
// title count -> done
//synthetic events in react - done
// block vs flex-box diff -> done
