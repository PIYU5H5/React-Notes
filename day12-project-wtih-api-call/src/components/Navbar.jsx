import React, { useContext } from "react";
import { flushSync } from "react-dom";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyStore)

  return (
    <div className=" text-white font-mono bg-gray-500 h-10 rounded p-5 flex items-center justify-between">
      <div>logo</div>
      <div className="flex gap-10">
        <p
          className="cursor-pointer"
          onClick={() => {
            setIsCartOpen(false);
          }}
        >
          Home
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            setIsCartOpen(true);
          }}
        >
          Cart
        </p>
      </div>
      <div>
        <button>login</button>
      </div>
    </div>
  );
};

export default Navbar;
