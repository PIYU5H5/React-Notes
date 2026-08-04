import React from "react";
import { NavLink } from "react-router";
import { LogOut } from 'lucide-react';
const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <h1>skydart</h1>
      <div className="flex gap-8 text-md items-center">
        <NavLink
          className={({isActive}) => {
            return isActive ? "text-yellow-500" : "";
          }}
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({isActive}) => {
            return isActive ? "text-yellow-500" : "";
          }}
          to={"/main/shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({isActive}) => {
            return isActive ? "text-yellow-500" : "";
          }}
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>
      <div className="flex gap-7 items-center">
        <h1>Hey <strong className="text-yellow-600">Piyush</strong></h1>
        <button>Cart</button>
        <LogOut className="cursor-pointer" size={16}/>
      </div>
    </div>
  );
};

export default Navbar;
