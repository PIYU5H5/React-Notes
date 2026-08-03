import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

const getStoredUsers = () => {
  try {
    const storedUsers = localStorage.getItem("registerdUsers");
    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    console.error("Failed to parse registered users:", error);
    return [];
  }
};

export const useAuth = () => {
  let dispatch = useDispatch();
  const [registerdUsers, setRegisterdUsers] = useState(getStoredUsers);
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    const updatedUsers = [...registerdUsers, data];
    setRegisterdUsers(updatedUsers);
    localStorage.setItem("registerdUsers", JSON.stringify(updatedUsers));
    toast.success("user registered");
  };

  const loginForm = (data) => {
    let user = registerdUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("Invalid stuff bruv..");
      return;
    }

    dispatch(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("user logged IN");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    registerForm,
    loginForm,
  };
};
