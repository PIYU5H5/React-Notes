import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginEmployee } from "../state/auth/authAction";

export let useAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onLoginSubmit = async (data) => {
    const resultAction = await dispatch(loginEmployee(data));

    if (loginEmployee.fulfilled.match(resultAction)) {
      navigate("/home", { replace: true });
    }
  };
  const onRegisterSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onRegisterSubmit,
    onLoginSubmit,
    navigate,
  };
};
