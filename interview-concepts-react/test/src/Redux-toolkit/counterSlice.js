import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialValues = {
  weather: {},
  countvalue: 0,
  loadingState: false,
};

export const weatherapi = createAsyncThunk(
  "weather/temp",
  async (data, thunkAPI) => {
    console.log("value of data in thunk is", data);
    console.log("getstate value si", thunkAPI.getState());
    try {
      console.log("thiunk is calleddd");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=d9b4ccd1aea2a04b837a859df0d7e48f`
      );
      if (!res) throw new Error("Invalid credentials");
      return res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: initialValues,
  reducers: {
    increment: (state, action) => {
      state.countvalue += 1;
    },
    decrement: (state) => {
      state.countvalue -= 1;
    },
    incrementbyamount: (state, action) => {
      state.countvalue += action.payload;
    },
    decrementbyamount: (state, action) => {
      state.countvalue -= action.payload;
    },
    // we can perform asyncronous operations in reducers as well without using the thunk , but it is not recommended , thunk provides various advantages so we use that .
    weather: (state, action) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=d9b4ccd1aea2a04b837a859df0d7e48f`
      )
        .then((res) => res.json())
        .then((data) => console.log(data.main))
        .catch((err) => console.log(err));
    },
  },
  // this is for handling thunk
  extraReducers: (builder) => {
    builder.addCase(weatherapi.fulfilled, (state, action) => {
      state.weather = action.payload.temp;
    });
    builder.addCase(weatherapi.rejected, (state, action) => {
      console.log("rejecte state");
    });
    builder.addCase(weatherapi.pending, (state, action) => {
      console.log("pending state");
      state.loadingState = true;
    });
  },
});

export const {
  increment,
  decrement,
  incrementbyamount,
  decrementbyamount,
  weather,
} = counterSlice.actions;

export default counterSlice.reducer;

// d9b4ccd1aea2a04b837a859df0d7e48f

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
