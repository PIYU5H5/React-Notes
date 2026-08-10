import React, { useState } from "react";
import { useAllCategories } from "../../hooks/useProductHooks";

const ProductFilter = ({ search, setSearch, category, setCategory }) => {
    
  const { data, isLoading, error } = useAllCategories();
  if (isLoading) return <h1>Loading</h1>;
  return (
    <div className="mb-6 flex w-full items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-black"
      />

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-48 rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-black"
      >
        <option value="all">All Categories</option>
        {data?.map((val) => (
          <option key={val.id} value={val.slug}>
            {val.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
