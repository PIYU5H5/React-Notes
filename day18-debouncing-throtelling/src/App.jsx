import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [scrollY, setScrollY] = useState(null);
  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
  };
  let throttle = false;

  let filteredData = () => {
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductsData(result);
  };
  useEffect(() => {
    if (!searchData) return;
    let timeout = setTimeout(() => filteredData(), 700);
    return () => clearTimeout(timeout);
  }, [searchData]);

  useEffect(() => {
    getProducts();
  }, []);

  // Throttling

  useEffect(() => {
    let handleScroll = () => {
      if (throttle) return;
      throttle = true;
      console.log(window.scrollY);
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 5000);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h1>Debouncing</h1>
      <input
        style={{ padding: "10px 20px" }}
        type="text"
        placeholder="Search products"
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
