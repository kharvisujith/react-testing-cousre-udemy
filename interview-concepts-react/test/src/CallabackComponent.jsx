const CallabackComponent = ({ todo, addTodo }) => {
  console.log("callback componet called");
  return (
    <>
      <h1>This is callback component</h1>
      <button onClick={addTodo}>Add todo</button>
      {todo.map((cur, ind) => {
        return <p key={ind}>cur</p>;
      })}
    </>
  );
};
export default CallabackComponent;
