import React from "react";
import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(Auth);

  const handleLogout = () => {
    localStorage.removeItem("Loggedinuser");
    toast.warn("logged out")
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <div className="border-r border-gray-500 flex p-3 flex-col gap-10 justify-between">
      <div className=" flex flex-col gap-10">
        <h1 className="text-3xl font-semibol">E-Com</h1>
        <div className="flex flex-col gap-4 ml-5">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/users"}
          >
            User
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500 border-b border-gray-500"
                : "text-black border-b border-gray-500"
            }
            to={"/main/products"}
          >
            Products
          </NavLink>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="py-2 bg-red-600 text-white cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
