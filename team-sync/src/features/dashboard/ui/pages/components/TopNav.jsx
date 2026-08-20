import React from "react";
import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../../shared/state/themeSlice";

const TopNav = () => {
  let dispatch = useDispatch();
  let handleThemeChange = () => {
    dispatch(toggleTheme());
  };
  let { mode } = useSelector((store) => store.theme);
  return (
    <div className="flex items-center justify-between bg-(--bg-card)">
      <div className="flex gap-4 items-center w-[30%] rounded px-3 py-2 bg-(--bg-surface) border border-gray-600">
        <Search size={24} />
        <input
          className="outline-0 w-full"
          type="text"
          placeholder="Search workspace"
        />
      </div>
      <div className="flex gap-4">
        {mode === "light" ? (
          <Moon
            className="cursor-pointer"
            size={23}
            onClick={handleThemeChange}
          />
        ) : (
          <Lightbulb
            className="cursor-pointer"
            size={23}
            onClick={handleThemeChange}
          />
        )}

        <Bell size={24} />
        <Menu size={24} />
      </div>
    </div>
  );
};

export default TopNav;
