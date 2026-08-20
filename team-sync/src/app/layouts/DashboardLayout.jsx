import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import AsideNav from "../../features/dashboard/ui/pages/components/AsideNav";
import TopNav from "../../features/dashboard/ui/pages/components/TopNav";

const DashboardLayout = () => {
  let mode = useSelector((store) => store.theme.mode);

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [mode]);
  return (
    <div className="h-screen grid grid-cols-[1fr_7fr]">
      <h1 className="border-r border-gray-500 px-6 py-4">
        <AsideNav />
      </h1>
      <div className="flex flex-col gap-5 bg-[--primary] px-6 py-4 overflow-auto">
        <TopNav />
        <div className="overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
