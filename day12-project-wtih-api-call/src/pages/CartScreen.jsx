import React, { useContext } from "react";
import CartItemCard from "../components/CartItemCard";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {


    let { cartItem } = useContext(MyStore)
  return (
    <div className="h-[95%] grid grid-cols-4">
      {
      cartItem.map((elem) => {
        return <CartItemCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
