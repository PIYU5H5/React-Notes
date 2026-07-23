import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <div className="p-4 rounded flex items-center bg-black text-white justify-between">
      <div>
        <img
          width={50}
          className=""
          src="https://docboss.com/wp-content/uploads/2025/06/computer-science-1331579_640-1.png"
          alt="users img"
        />
      </div>
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={() => setToggle((prev) => !prev )} className="p-2 bg-blue-700 rounded cursor-pointer">
        Create User
      </button>
    </div>
  );
};

export default Navbar;
