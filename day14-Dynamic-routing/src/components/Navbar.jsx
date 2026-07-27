import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" text-white font-mono bg-gray-500 h-10 rounded p-5 flex items-center justify-between">
      <div>logo</div>
      <div className="flex gap-10">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>about</NavLink>
        <NavLink to={"/products"}>products</NavLink>
      </div>
      <div>
        <button>login</button>
      </div>
    </div>
  );
};

export default Navbar;
