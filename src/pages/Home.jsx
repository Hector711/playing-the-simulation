import React from "react";
import { NavLink } from "react-router-dom";
import AsideLeft from "@/pages/components/AsideLeft";

export default function Home() {
  return (
    <div id="home-content">
      <AsideLeft /> 
      <main>
        <section id="new-post">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Write Something" />
          <div>
            <button>Adj</button>
            <button>Link</button>
            <button>YT</button>
            <button>Poll</button>
            <button>Emoji</button>
            <button>Gif</button>
            <button>Cat</button>
            <button>Send</button>
          </div>
        </section>
        <NavLink>
          <section>
            <h4>Bajada de ritmo en la comunidad</h4>
            <p>
              Buenas chavales, no se si vosotros lo habéis notado, pero
              últimamente veo poco movimiento en la comunidad, cada vez los
              intervalos de posts han aumentado y veo menos calidad en
              contenido, vosotros lo habéis notado o es cosa mía ?
            </p>
          </section>
        </NavLink>
      </main>
      <aside id="right">
        <h1>Noticias</h1>

        <NavLink>
          <section>
            <h4>Nuevo contenido Disponible</h4>
            <p>
              Buenas tardes chicos, ya tenéis nuevo contenido subido a la
              plataforma. Esta vez os entrego 👉
              <span>Leccionable 2</span>
              ¡Espero que lo disfrutéis!
            </p>
          </section>
        </NavLink>
      </aside>
    </div>
  );
}
