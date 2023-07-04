const Demo = (props) => {
  const handleDecrement = () => {
    if (props.count < 1) {
      props.setCount(props.count - 1);
    }
  };
  console.log(props);
  return (
    <>
      {/* <button
        onClick={() => props.setCount(props.count + 1)}
        style={{ color: "green" }}
      >
        Increment
      </button>
      <h5>{count}</h5>
      <button style={{ color: "red" }} onClick={handleDecrement}>
        Decrement
      </button> */}
    </>
  );
};

export default Demo;
