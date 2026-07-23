import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";
import CartItemCard from "./components/CartItemCard";

const App = () => {
  let { isCartOpen, setCartItem, setIsCartOpen, cartItem } =
    useContext(MyStore);

  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? (
        <div>
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-4">
          {productData.map((elem) => {
            let cartProduct = cartItem.find((val) => val.id === elem.id);
            return (
              <ProductCards key={elem.id} product={elem} isInCart={cartProduct} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
