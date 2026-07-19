import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setUsers((prev) => [...prev, data]);
    console.log(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-xl font-bold">Create user</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-70 flex flex-col gap-3 p-4 rounded bg-gray-200 border-2 border-blue-300"
      >
        <input
          {...register("Name", { required: "Name is Required" })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Name"
        />
        {errors.Name && <p className="text-red-600">{errors.Name.message}</p>}
        <input
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "please enter valid email",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="email"
          placeholder="Email"
        />
        {errors.Email && <p className="text-red-600">{errors.Email.message}</p>}

        <input
          {...register("Mobile", {
            required: "Number is required",
            minLength: {
              value: 10,
              message: "Min 10 digits required",
            },
            maxLength: {
              value: 10,
              message: "Max to max 10 digits",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="number"
          placeholder="Mobile"
        />
        {errors.Mobile && (
          <p className="text-red-600">{errors.Mobile.message}</p>
        )}

        <input
          {...register("Image", { required: "Image is required" })}
          className="p-2 rounded outline-0 border border-white"
          type="url"
          placeholder="Image"
        />
        {errors.Image && <p className="text-red-600">{errors.Image.message}</p>}

        <button
          type="submit"
          className="bg-blue-700 rounded text-white cursor-pointer p-2"
        >
          Add user
        </button>
      </form>
    </div>
  );
};

export default Form;
