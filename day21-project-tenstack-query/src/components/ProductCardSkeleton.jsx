import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 animate-pulse">
      {/* Image */}
      <div className="w-full h-52 rounded-lg bg-zinc-800"></div>

      {/* Title */}
      <div className="mt-4 h-5 w-3/4 bg-zinc-800 rounded"></div>

      {/* Price & Stock */}
      <div className="mt-3 flex items-center justify-between">
        <div className="h-5 w-16 bg-zinc-800 rounded"></div>
        <div className="h-4 w-14 bg-zinc-800 rounded"></div>
      </div>

      {/* Button */}
      <div className="mt-4 h-10 w-full bg-zinc-800 rounded-lg"></div>
    </div>
  );
};

export default ProductCardSkeleton;