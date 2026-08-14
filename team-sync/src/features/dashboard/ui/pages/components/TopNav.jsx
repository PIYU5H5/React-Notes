import React from "react";
import { Bell, Menu, Search } from "lucide-react";
const TopNav = () => {
  return (
    <div className="flex justify-between items-center bg-[--bg-card] ">
      <div className="flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-[#1b191E] border border-gray-600">
        <Search size={24}/>
        <input className="outline-0 w-full" type="text" placeholder="Search workspace" /></div>
      <div className="flex gap-4">
        <Bell size={24} />
        <Menu size={24}/>
      </div>
    </div>
  );
};

export default TopNav;
