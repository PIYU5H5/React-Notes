import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Product Image */}
      <div className="h-52 w-full bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="mb-1 text-sm capitalize text-gray-500">
          {product.category}
        </p>

        <h2 className="truncate text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-yellow-500">⭐ {product.rating}</span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => console.log("Added to cart:", product)}
          className="mt-4 w-full rounded-lg bg-black px-4 py-2.5 font-medium text-white transition hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
