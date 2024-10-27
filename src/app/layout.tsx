import type { Metadata } from 'next';
// INIT
import '@/styles/reset/reset.scss';
import '@/styles/init.scss';
// LAYOUT
import '@/styles/layout_navbar.scss';
import '@/styles/layout_model.scss';
import '@/styles/layout_models.scss';
// PAGES
import '@/styles/page_wellcome.scss';
import '@/styles/page_home.scss';
import '@/styles/page_signup.scss';
// COMPONENTS
import '@/styles/comp_aside_profile.scss';
import '@/styles/comp_news.scss';
import '@/styles/comp_avatar.scss';
import '@/styles/comp_login.scss';
import '@/styles/comp_post.scss';
import '@/styles/comp_new_post.scss';
import '@/styles/comp_first_form.scss';

export const metadata: Metadata = {
  title: 'Playing The Simulation',
  description: 'Playing The Simulation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
