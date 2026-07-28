import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";

const RegisterPage = () => {
  const { setRegisteredUser, registeredUser } = useContext(Auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const formsubmit = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    console.log("User Registered");
    localStorage.setItem("registeredUser", JSON.stringify(arr));
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign up to get started
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(formsubmit)} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              {...register("name", { required: "name is needed" })}
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              {...register("email", { required: "email is needed" })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "password is needed",
                minLength: {
                  value: 6,
                  message: "Min 6 chars",
                },
              })}
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
