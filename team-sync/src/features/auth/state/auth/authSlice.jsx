import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedInEmployee, loginEmployee } from "./authAction";

let authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isloading: false,
    error: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isloading = false;
      state.error = null;
    },
    removeEmployee: (state) => {
      state.employee = null;
      state.isloading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isloading = true;
        state.error = null;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isloading = false;
        state.error = null;
      })
      .addCase(loginEmployee.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(currentLoggedInEmployee.pending, (state) => {
        state.isloading = true;
      })
      .addCase(currentLoggedInEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isloading = false;
        state.error = null;
      })
      .addCase(currentLoggedInEmployee.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export let { addEmployee, removeEmployee } = authSlice.actions;

export default authSlice.reducer;
