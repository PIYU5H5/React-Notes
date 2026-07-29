import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";

export const useAuth = () => {
  const { registeredUser, loggedInUser, setLoggedInUser } = useContext(Auth);

  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const loginFromSubmit = (data) => {
    let user = registeredUser.find(
      (val) => val.email === data.email && val.password === data.password,
    );
    if (!user) {
      toast.error("invalid bruv");
      return;
    } else {
      setLoggedInUser(user);
      localStorage.setItem("Loggedinuser", JSON.stringify(user));
      toast.success("hell yeah");
      navigate("main");
    }
    reset();
  };

  const registerFormsubmit = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    console.log("User Registered");
    localStorage.setItem("registeredUser", JSON.stringify(arr));
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFromSubmit,
    registerFormsubmit,
  };
};
