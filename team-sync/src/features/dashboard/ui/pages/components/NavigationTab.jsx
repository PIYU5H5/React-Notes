import { ChartArea } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, Icon }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex gap-4 pl-4 py-3 ${isActive ? "border-r-4 border-[var(--bg-primary)] bg-[var(--secondary)]" : ""}`
      }
      path={path}
      end ="/"
    >
      <ChartArea size={23} /> {title}
    </NavLink>
  );
};

export default NavigationTab;
