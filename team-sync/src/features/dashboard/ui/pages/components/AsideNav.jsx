import React from "react";
import { NavLink } from "react-router";
import NavigationTab from "./NavigationTab";
import { ChartArea } from "lucide-react";
import { useSelector } from "react-redux";
import { adminRoutes } from "../../../../../app/routes/adminRoutes";
import {
  adminNavigation,
  employeeNavigation,
} from "../../../../../app/constants/navigations";
const AsideNav = () => {
  let { employee } = useSelector((store) => store.auth);

  let navigations =
    employee.role === "admin" ? adminNavigation : employeeNavigation;
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">team-sync</h1>
        <p className="text-sm text-[var(--text-secondary)]">
          Enterprise workspace
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {navigations.map((route) => {
          return (
            <NavigationTab
              path={route.path}
              Icon={route.Icon}
              title={route.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AsideNav;
