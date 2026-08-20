import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const RoleBaseRoute = ({ allowedRoles = [] }) => {
  let { employee } = useSelector((store) => store.auth);
  const allowed = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
  const role = employee?.role;

  if (!allowed.includes(role)) {
    return <Navigate to={"/unauthorized"} />;
  }

  return <Outlet />;
};

export default RoleBaseRoute;
