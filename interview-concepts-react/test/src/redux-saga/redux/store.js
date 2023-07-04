import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from "./dummySlice";
// import { sagaMiddleware } from "../../index";
import createSagaMiddleware from "redux-saga";
export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
  middleware: [sagaMiddleware],
});
