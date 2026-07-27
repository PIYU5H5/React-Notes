import React from "react";
import Navbar from "../src/components/Navbar.jsx";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes/>
    </div>
  );
};

export default App;
