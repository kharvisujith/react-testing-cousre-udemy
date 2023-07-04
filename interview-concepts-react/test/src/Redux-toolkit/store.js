import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";

// const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });

// if we have multiple slices, i.e reducers we do this way
const reducer = combineReducers({
  // put all your reducers here!
  counter: counterSlice,
  login: loginSlice,
});

const store = configureStore({
  reducer,
});

export default store;



