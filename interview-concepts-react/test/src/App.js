import Demo from "./Demo";
import { useEffect, useState } from "react";
import Callbackhook from "./Callbackhook";
import CompOne from "./CompOne";
import CompTwo from "./CompTwo";
import CounterRedux from "./CounterWithRedux/CounterRedux";
import CounterWithReduxtk from "./Redux-toolkit/CounterWithReduxtk";

const App = () => {
  const [count, setCount] = useState(0);
  // document.title = count;
  useEffect(() => {
    document.title = count;
  });
  return (
    <>
      <h1>Hi hello</h1>
      {/* <Demo count={count} setCount={setCount} /> */}

      {/* This compoennt demonstrates useCallback hook */}
      {/* <Callbackhook /> */}

      {/* These two components for hoc demo */}
      {/* <CompOne />
      <CompTwo /> */}

      {/* Counter implementaton with redux-normal */}
      {/* <CounterRedux /> */}

      {/* Counter with redux toolkit */}
      <CounterWithReduxtk />
    </>
  );
};
export default App;
