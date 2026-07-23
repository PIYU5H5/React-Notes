import React from "react";
import { useForm } from "react-hook-form";
const RHF = () => {
  let data = useForm();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-80">
      <form onSubmit={handleSubmit((data) => console.log(data))} className="p-6 rounded bg-white flex flex-col gap-4">
        <input
        {...register("productName")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
        {...register("price")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span>Select category</span>
        <select {...register("category")} className="p-2 border border-gray-400 rounded" name="" id="">
          <option value="Mens">Mens</option>
          <option value="Women">Womens</option>
          <option value="Kids">Kids</option>
        </select>
        <input
        {...register("image")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
        />

        <button className="p-2 bg-blue-600 text-white rounded">CREATE</button>
      </form>
    </div>
  );
};

export default RHF;
