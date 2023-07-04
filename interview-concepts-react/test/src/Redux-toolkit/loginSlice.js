import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  logingState: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialValues,
  reducers: {
    login: (state, action) => {
      state = true;
    },
    logout: (state, action) => {
      state = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
