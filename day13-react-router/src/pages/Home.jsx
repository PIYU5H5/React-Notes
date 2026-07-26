import React from "react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Outlet/>
    </>
  );
};

export default Home;
