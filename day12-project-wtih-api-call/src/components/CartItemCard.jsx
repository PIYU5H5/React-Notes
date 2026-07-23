import React from "react";

const CartItemCard = ({ product, updateQuantity, removeItem }) => {
  // Using your FakeStore API data structure
  const { id, title, price, image, category } = product;

  // In a real app, 'quantity' would come from your cart state.
  // We'll default to 1 for this display component.
  const quantity = product.quantity || 1;

  return (
    <div className="flex flex-col sm:flex-row items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm gap-6 mb-4 hover:shadow-md transition-shadow">
      {/* 1. Product Image */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-white rounded p-2 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* 2. Product Details */}
      <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
        <h3
          className="text-lg font-bold text-gray-900 line-clamp-2 sm:line-clamp-1"
          title={title}
        >
          {title}
        </h3>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">
          {category}
        </span>
        {/* Individual Item Price */}
        <span className="text-xl font-black text-gray-900 mt-2">
          ${price.toFixed(2)}
        </span>
      </div>

      {/* 3. Actions (Quantity & Remove) */}
      <div className="flex flex-col items-center sm:items-end gap-3 mt-4 sm:mt-0">
        {/* Quantity Controls */}
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <button
            onClick={() => updateQuantity(id, quantity - 1)}
            className="px-3 py-1 bg-gray-50 hover:bg-gray-200 text-gray-600 font-bold transition-colors"
            disabled={quantity <= 1}
          >
            -
          </button>

          <span className="px-4 py-1 text-sm font-semibold text-gray-900 border-x border-gray-300">
            {quantity}
          </span>

          <button
            onClick={() => updateQuantity(id, quantity + 1)}
            className="px-3 py-1 bg-gray-50 hover:bg-gray-200 text-gray-600 font-bold transition-colors"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => removeItem(id)}
          className="text-sm text-red-500 hover:text-red-700 font-semibold transition-colors underline-offset-2 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
