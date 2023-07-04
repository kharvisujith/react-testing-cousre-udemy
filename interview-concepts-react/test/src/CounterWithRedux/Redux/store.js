import { createStore } from "redux";
import allReducer from "./reducer/allReducers";

const store = createStore(allReducer);

export default store;
