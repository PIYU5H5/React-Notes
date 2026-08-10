import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

//Redux thunk is a outer action for syncing with state to handle the promise state

export const loginUserAction = createAsyncThunk(
  "/auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await api.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("User logged in");
      return res.data;
    } catch (e) {
      toast.error("Failed hai bhai scene");
      return thunkApi.rejectWithValue("Login failed");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "/auth/hydrate",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");
    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (e) {
      toast.error("Hydration failed");
      return thunkApi.rejectWithValue("Unauthorised User");
    }
  },
);
