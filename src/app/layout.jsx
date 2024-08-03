import { Inter } from "next/font/google";
// INIT
import "@/css/reset/reset.css";
// LAYOUTS
import "@/css/layout-navbar.scss";
import "@/css/layout-models.scss";
// COMPONENTS
import "@/css/comp-aside-profile.scss";
import "@/css/comp-avatar.scss";
import "@/css/comp-news.scss";

import Navbar from "@/layouts/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Playing The Simulation 2.0",
  description: "Make PTS Great Again",
};

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        {session && <Navbar />}
        {children}
      </body>
    </html>
  );
}

