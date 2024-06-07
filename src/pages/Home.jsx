import React from "react";
import AsideLeft from "@/pages/components/AsideLeft";
import NewPost from "./components/NewPost";
import Timeline from "./components/Timeline";
import AsideRight from "./components/AsideRight";


export default function Home() {
  return (
    <div id="home-content">
      <AsideLeft />
      <main>
        <NewPost />
        <hr />
        <Timeline />
      </main>
      <AsideRight />
    </div>
  );
}
