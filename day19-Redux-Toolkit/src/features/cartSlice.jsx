import { createSlice } from "@reduxjs/toolkit";
import reducer from "./counterSlice";
import { act } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = (action.payload);
    },
    removerFromCart: () => {},
  },
});

const { addToCart, removerFromCart } = cartSlice.actions;
export default cartSlice.reducer;
