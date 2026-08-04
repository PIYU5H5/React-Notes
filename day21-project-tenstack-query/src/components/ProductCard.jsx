import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all duration-200">
      {/* Product Image */}
      <div className="h-52 bg-zinc-800 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={product.thumbnail || product.image}
          alt={product.title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <h2 className="text-white text-lg font-medium truncate">
          {product.title}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-white">${product.price}</span>

          <span className="text-sm text-zinc-400">Stock: {product.stock}</span>
        </div>

        <button className="w-full mt-2 bg-white text-black py-2 rounded-lg font-medium hover:bg-zinc-200 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
