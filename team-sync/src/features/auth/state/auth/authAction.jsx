import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../../../config/axiosInstance";

const normalizeError = (error) => {
  if (axios.isAxiosError(error)) {
    return {
      message: error.response?.data?.message || error.message,
      status: error.response?.status || 500,
    };
  }

  return {
    message: "Something went wrong",
    status: 500,
  };
};

export let loginEmployee = createAsyncThunk(
  "auht/login",
  async (credentials, thunkapi) => {
    try {
      let res = await axiosInstance.post("/auth/login", credentials);
      return res.data.data;
    } catch (error) {
      return thunkapi.rejectWithValue(normalizeError(error));
    }
  },
);

export let currentLoggedInEmployee = createAsyncThunk(
  "auth/me",
  async (_, thunkapi) => {
    try {
      let res = await axiosInstance.get("/auth/me");
      return res.data.data;
    } catch (error) {
      return thunkapi.rejectWithValue(normalizeError(error));
    }
  },
);
