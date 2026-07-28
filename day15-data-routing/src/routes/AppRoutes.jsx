import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {path : "",element:<Home/>},
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
