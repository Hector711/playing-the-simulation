import React from "react";
import NewPost from "@/components/NewPost";
import Timeline from "@/components/Timeline";
import AsideRight from "@/components/AsideRight";


export default function Home() {
  return (
    <>
      <main id='home'>
        <NewPost />
        <hr className="home"/>
        <Timeline />
      </main>
      <AsideRight />
    </>
  );
}
