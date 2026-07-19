import React, { use, useContext } from "react";
import { Star, Trash2 } from "lucide-react";
import { MyShop } from "../context/MyWebsite";

const Cart = () => {

  let {cartItem} = useContext(MyShop);

  const total = cartItem.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-5 lg:col-span-2">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>

          {cartItem.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center shadow">
              <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
              <p className="mt-2 text-gray-500">
                Add some products to get started.
              </p>
            </div>
          ) : (
            cartItem.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-5 rounded-2xl bg-white p-5 shadow-md transition hover:shadow-lg sm:flex-row"
              >
                {/* Image */}
                <div className="flex h-36 w-36 items-center justify-center rounded-xl bg-gray-100 p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h2 className="line-clamp-2 text-lg font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500 capitalize">
                    {item.category}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span>{item.rating.rate}</span>
                    <span className="text-gray-500">
                      ({item.rating.count} reviews)
                    </span>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="flex flex-col items-end gap-4">
                  <h2 className="text-2xl font-bold text-green-600">
                    ${item.price}
                  </h2>

                  <button className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
                    <Trash2 size={18} />
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="h-fit rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

          <div className="mb-3 flex justify-between text-gray-600">
            <span>Items</span>
            <span>{cartItem.length}</span>
          </div>

          <div className="mb-5 flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            disabled={cartItem.length === 0}
            className="w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
