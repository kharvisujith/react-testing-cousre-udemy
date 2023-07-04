let initialState = 0;

const countReducer = (state = initialState, action) => {
  console.log("reducer called", action.type);
  switch (action.type) {
    case "increment": {
      console.log("inc reducer called");
      return state + 1;
    }

    case "decrement": {
      console.log("valu of payload is", action.payload);
      if (state > 0) {
        return state - 1;
      }
      return state;
    }
    case "reset":
      return 0;

    default:
      return state;
  }
};

export default countReducer;
