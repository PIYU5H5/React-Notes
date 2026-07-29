import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200">
      <div className="h-60 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <div className="p-5">
        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mb-3">
          {product.category}
        </span>

        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;