import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/pages/components/Navbar";

export default function Layout() {
  
  return (
    <>
      <Navbar />
      <Outlet />
      <footer id='home'></footer>
    </>
  );
}
