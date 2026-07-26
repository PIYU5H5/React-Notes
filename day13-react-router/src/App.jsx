import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { NavLink, Route, Routes } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-screen p-2">
      <Navbar/>
      <AppRoutes/>
    </div>
  );
};

export default App;
