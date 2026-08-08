import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const useAuth = () => {
  let navigate = useNavigate();

  const [registerdUsers, setRegisterdUsers] = useState([]);
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

  const loginForm = (data) => {
    console.log("login data", data);
    
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
