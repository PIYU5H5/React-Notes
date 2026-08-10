import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";
import { loginUserAction } from "../state/authAction";

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
      dispatch(loginUserAction(data))
      
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
