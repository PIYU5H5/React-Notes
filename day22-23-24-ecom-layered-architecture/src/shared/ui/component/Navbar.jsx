import React from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-10 bg-yellow-400">
      <h1>logo</h1>

      <div className="flex items-center gap-10 text-xl">
        <NavLink className={({isActive}) => isActive ? "text-white font-semibold" : "text-gray-200"} end to={"/main"}>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-white font-semibold" : "text-gray-200"} to={"/main/product"}>Shop</NavLink>
        <NavLink className={({isActive}) => isActive ? "text-white font-semibold" : "text-gray-200"} to={"/main/about"}>About</NavLink>
      </div>

      <div className="flex items-center gap-4 ">
        <NavLink to={"/main/cart"}>
          <ShoppingCart />
        </NavLink>
        <NavLink to={"/main/orders"}>
          <Box />
        </NavLink>
        <button className="px-5 rounded cursor-pointer py-2 text-white bg-red-700">
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
