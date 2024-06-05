import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div id='main'>
      <aside id='left'>
        <section id='profile'>Profile</section>
        <span>Notificaciones</span>
        <span>Guardados</span>
      </aside>
      <main>
        <section></section>
      </main>
      <aside id='right'>
        <h1>PTS News</h1>
      </aside>
    </div>
  );
}
