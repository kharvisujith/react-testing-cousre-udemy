import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounterfetch } from "./redux/dummySlice";

const App = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.dummy);
  console.log("value is ", value);
  useEffect(() => {
    dispatch(getCounterfetch());
  }, [dispatch]);
  return (
    <>
      <h1>keeek</h1>
    </>
  );
};
export default App;
