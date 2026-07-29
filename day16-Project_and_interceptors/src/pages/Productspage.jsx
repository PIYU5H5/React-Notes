
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const Productspage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getProductData = async () => {
    try {
      let res = await axiosInstance.get('/products')
      setProductsData(res.data);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getProductData();
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default Productspage;
