import axios from "axios";
import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductsCard";

const Home = () => {
  let { productData, setProductData } = useContext(MyStore);
  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getProductsData()
  }, [])
  

  return <div className="p-2 gap-3 grid grid-cols-4">
    {
        productData.map((val) => {
            return <ProductCard key={val.id} product={val} />
        })
    }
  </div>;
};

export default Home;
