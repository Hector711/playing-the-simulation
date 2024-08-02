import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "@/components/AuthButtonServer";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: posts } = await supabase.from("posts").select();
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Navbar />
      <AuthButtonServer />
      <div>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
        <h1>Hello World</h1>
      </div>
    </main>
  );
}

function Navbar() {
  const navLinks = [
    { title: "Classroom", page: "/classroom" },
    { title: "Playground", page: "/playground" },
    { title: "Members", page: "/miembros" },
    { title: "Biblioteca", page: "/biblioteca" },
  ];
  return (
    <nav id="nav" className="blurr-nav">
      <div id="nav-container">
        <div id="nav-left">
          <Link href="/inicio">
            <h1 className="main-title">Playing The Simulation</h1>
          </Link>
          {navLinks.map((link, i) => (
            <NavLinkButton key={i} href={link.page}>
              {link.title}
            </NavLinkButton>
          ))}
        </div>
        <div id="nav-right">
          {/* <NavLinkButton href='/comunidad'>Comunidad</NavLinkButton> */}
        </div>
      </div>
    </nav>
  );
}

function NavLinkButton({ children, href }) {
  return (
    <Link href={href}>
      <h2>{children}</h2>
    </Link>
  );
}
