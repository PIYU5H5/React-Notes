import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "./authAction";
import { hydrateUser } from "../api/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  },
  reducers: {
    addUser: (state, aciton) => {
      state.user = aciton.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(hydrateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(hydrateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(hydrateUser.rejected, (state, action) => {
        state.isLoading = false;
      })
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
