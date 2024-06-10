import React from "react";
import { Outlet } from "react-router-dom";
import AsideLeft from "@/components/AsideLeft";

export default function AsideLayout() {
  return (
    <>
      <div id="layout">
        <AsideLeft />
        <Outlet />
      </div>
    </>
  );
}
