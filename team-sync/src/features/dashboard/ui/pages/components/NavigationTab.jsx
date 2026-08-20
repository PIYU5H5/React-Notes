import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, Icon }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex items-center gap-4 rounded-lg px-4 py-3 transition-all ${
          isActive
            ? "bg-white/15 text-white shadow-[0_0_24px_rgba(255,255,255,0.28)] ring-1 ring-white/40"
            : "text-(--text-secondary) hover:bg-white/8 hover:text-white"
        }`
      }
      to={path}
      end={path === "/home"}
    >
      {Icon ? <Icon size={20} /> : null} {title}
    </NavLink>
  );
};

export default NavigationTab;
