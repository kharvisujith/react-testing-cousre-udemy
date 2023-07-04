import { call, put, takeEvery } from "redux-saga/effects";
import { getCounterError, getCounterSuccess } from "./dummySlice";

//callapi are in api agent--> axios request
const callCounterApi = () => {
  console.log("called counter api");
  return "keeek";
};
const callCatsApi = () => {
  console.log("called callCatsApi api");
};
const callDogsApi = () => {
  console.log("called callDogsApi api");
};
const apiFunctions = {
  "dummy/getCounterfetch": callCounterApi,
  "dummy/getCatsfetch": callCatsApi,
  "dummy/getDogsfetch": callDogsApi,
};

const callApi = function* (action) {
  console.log("call Api calledd");
  const apiFunctontobeCalled = apiFunctions[action.type];
  const res = yield call(apiFunctontobeCalled);
  if (res) {
    yield put(getCounterSuccess());
  } else {
    yield put(getCounterError());
  }
  //   yield put(getCounterSuccess());
  //   yield put(getCounterError());
};

const counterSaga = function* () {
  console.log("inside counter saga");
  yield takeEvery(["dummy/getCounterfetch", "dummy/getCounterfetch2"], callApi);
};

export default counterSaga;
