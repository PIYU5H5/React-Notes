import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { store } from "../store";

const ProtectedRoute = () => {
  let { employee, isloading } = useSelector((store) => store.auth);

  if (isloading) return <h1>Loading</h1>;

  if (!employee) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
