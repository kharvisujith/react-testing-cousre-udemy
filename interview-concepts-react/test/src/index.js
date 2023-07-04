import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
//import App from "./callbackDemo/App";
//import App from "./react-mdn-swap/App";
//for redux
//import App from "./redux-saga/App";
//for todo
import App from "./todo/app";
import reportWebVitals from "./reportWebVitals";

//import store from "./CounterWithRedux/Redux/store";
//import store from "./Redux-toolkit/store";

//for redux-saga
import { Provider } from "react-redux";
import { store } from "./redux-saga/redux/store";
//import createSagaMiddleware from "redux-saga";
import counterSaga from "./redux-saga/redux/CounterSagas";
import { sagaMiddleware } from "./redux-saga/redux/store";

//export const sagaMiddleware = createSagaMiddleware();

//for before callback demo
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

//for callback demo
//
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// for mdn-swap

//for redux -saga
sagaMiddleware.run(counterSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <App />
  // </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
