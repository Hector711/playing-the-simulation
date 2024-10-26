import type { Metadata } from "next";
import Navbar from '@/components/Navbar';

// INIT
import "@/styles/reset/reset.scss";
import "@/styles/init.scss";
// LAYOUT
import '@/styles/layout-models.scss';
import '@/styles/layout-navbar.scss';
// PAGES
import '@/styles/page-wellcome.scss';
// COMPONENTS
import '@/styles/comp-aside-profile.scss';
import '@/styles/comp-news.scss';
import '@/styles/comp-avatar.scss';
import '@/styles/comp-login.scss';

export const metadata: Metadata = {
  title: "Playing The Simulation",
  description: "Playing The Simulation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <div id='body'>
          {children}
        </div>
      </body>
    </html>
  );
}




