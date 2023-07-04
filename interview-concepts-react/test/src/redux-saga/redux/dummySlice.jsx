import { createSlice } from "@reduxjs/toolkit";

const dummySlice = createSlice({
  name: "dummy",
  initialState: {
    loader: false,
    value: 0,
  },
  reducers: {
    getCounterfetch: (state) => {
      console.log("counter fetchh callleedd");
      state.value += 1;
    },
    getCounterSuccess: (state) => {
      console.log("inside succes");
    },
    getCounterError: (state) => {
      console.log("inside errro");
    },
  },
});

export const { getCounterfetch, getCounterSuccess, getCounterError } =
  dummySlice.actions;

export default dummySlice.reducer;
