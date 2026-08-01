import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  // this is a state for holding
  initialState: {
    count: 0,
  },

  // here is the actions for updating the state

  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;


export default counterSlice.reducer