import React from "react";
import { useProductApi } from "../hooks/productHooks";

const Filters = ({filterProducts}) => {

  


  return (
    <div className="p-3 flex w-full gap-6 border border-gray-500 rounded">
      <div className="flex gap-8 w-full">
        <input
        onChange={(e) => filterProducts(e.target.value)}
          className="p-2 outline-0 border w-full rounded"
          type="text"
          placeholder="Search products..."
        />
        <button className="  p-2 bg-white text-black rounded border-0">
          search
        </button>
      </div>
      <div >
        <span>select categories</span>
        <select className="p-2 bg-white text-black rounded border">
          <option value="groceries">groceries</option>
          <option value="beauty">beauty</option>
          <option value="furniture">furniture</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
