import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    // implement registration logic here
    console.log("register data", data);
  };

  const loginForm = async (data) => {
    try {
      let response = await loginUserApi(data);
      dispatch(addUser(response));
      toast.success("User logged in")
    } catch (error) {
      console.log(error);
    }
  };

  return {
    navigate,
    registerForm,
    handleSubmit,
    errors,
    register,
    loginForm,
  };
};
