export const Increment = () => {
  console.log("inc called");
  return {
    type: "increment",
    payload: "add it",
  };
};

export const Decrement = () => {
  return {
    type: "decrement",
    payload: "minus it",
  };
};

export const Reset = () => {
  return {
    type: "reset",
    payload: "reset it",
  };
};
