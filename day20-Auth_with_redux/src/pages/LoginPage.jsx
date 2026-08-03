import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/authHooks";
const LoginPage = () => {
  let {
    navigate,
    register,
    handleSubmit,
    formState: { errors },
    loginForm,
  } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-8">Login to continue</p>

        {/* Form */}
        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              {...register("email", {
                required: "email is needed",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "password is needed",
                minLength: {
                  value: 8,
                  message: "Min 8 chars",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>
          {errors.password && <p className="text-red">{errors.password}</p>}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
            Login
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
