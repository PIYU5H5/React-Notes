import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";

import Contact from "../pages/Contact";
let About = lazy(() => import("../pages/About"));
const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<h1>Loading about</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: contact,
          
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
