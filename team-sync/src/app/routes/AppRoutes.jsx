import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../../features/dashboard/ui/pages/Home";
import { useDispatch } from "react-redux";
import { currentLoggedInEmployee } from "../../features/auth/state/auth/authAction";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import { commanRoutes } from "./commanRoutes";
import { commanRoutes } from "./adminRoutes";
import RoleBaseRoute from "../protectedRoutes/RoleBaseRoute";
import { employeeRoutes } from "./employeeRoutes";

export const AppRoutes = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(currentLoggedInEmployee());
    })();
  }, []);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            ...commanRoutes,
            {
              element:<RoleBaseRoute allowedRoles={"admin"}/>,
              children=adminRoutes,
            },
            {
              element:<RoleBaseRoute allowedRoles={"employee"}/>,
              children=employeeRoutes,
            }
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
