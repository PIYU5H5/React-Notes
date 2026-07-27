import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [singleProductData, setSingleProductData] = useState({});
  let { id } = useParams();

  let getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log("single product response", res.data);
      setSingleProductData(res.data);
    } catch (e) {
      console.error("Failed to fetch product", e);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Image Section */}
        <div className="bg-gray-50 flex items-center justify-center p-10">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full capitalize">
              {singleProductData.category}
            </span>

            <h1 className="text-4xl font-bold mt-4 text-gray-900">
              {singleProductData.title}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>

              <span className="text-gray-600">
                {singleProductData.rating?.rate} ({singleProductData.rating?.count} Reviews)
              </span>
            </div>

            <h2 className="text-3xl font-bold text-green-600 mt-6">
              ${singleProductData.price}
            </h2>

            <p className="text-gray-600 mt-6 leading-7">
              {singleProductData.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Add to Cart
            </button>

            <button className="flex-1 border-2 border-black py-3 rounded-xl hover:bg-black hover:text-white transition">
              Buy Now
            </button>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center border-t pt-6">
            <div>
              <p className="font-semibold">Free</p>
              <p className="text-sm text-gray-500">Shipping</p>
            </div>

            <div>
              <p className="font-semibold">30 Days</p>
              <p className="text-sm text-gray-500">Return</p>
            </div>

            <div>
              <p className="font-semibold">Secure</p>
              <p className="text-sm text-gray-500">Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
