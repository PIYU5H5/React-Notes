import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/Registerpage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Homepage from "../pages/Homepage";
import Userspage from "../pages/Userspage";
import Productspage from "../pages/Productspage";
const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            { index: true, element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children:[
            {
              path:"",
              element:<Homepage/>
            },
            {
              path:"users",
              element:<Userspage/>
            },
            {
              path:"products",
              element:<Productspage/>
            }
          ]
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
