import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ isInCart, product }) => {
  let { setCartItem, incrementQuantity } = useContext(MyStore);
  const { title, price, description, category, image, rating } = product;

  let addToCart = () => {
    setCartItem((prev) => {
      const alreadyInCart = prev.some((item) => item.id === product.id);
      return alreadyInCart ? prev : [...prev, { ...product, quantity: 1 }];
    });
    alert("Product added");
  };
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="h-64 w-full bg-white p-4 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-2">
        {/* Category */}
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {category}
        </span>

        {/* Title (Truncated to 2 lines so cards stay uniform height) */}
        <h3
          className="text-lg font-bold text-gray-900 line-clamp-2"
          title={title}
        >
          {title}
        </h3>

        {/* Description (Truncated to 3 lines) */}
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* Price and Rating Row */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-black text-gray-900">
            ${price.toFixed(2)}
          </span>

          <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <span className="text-yellow-400">★</span>
            <span>{rating?.rate}</span>
            <span className="text-gray-400 font-normal">({rating?.count})</span>
          </div>
        </div>

        {/* Optional Action Button */}
        {isInCart ? (
          <button className="w-full bg-gray-600 flex items-center justify-center gap-10">
            <span className="text-4xl">-</span>{" "}
            <span className="text-5xl">{isInCart.quantity}</span>
            <span
              onClick={() => {
                incrementQuantity(product.id);
              }}
              className="text-4xl"
            >
              +
            </span>
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
